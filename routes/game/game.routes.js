/*
Imports
*/
    // Node
    const express = require('express');
    const classRouter = express.Router();

    // Inner
    const Mandatory = require('../../services/mandatory.service');
    const Vocabulary = require('../../services/vocabulary.service');
    const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/response.service');
    const { checkFields } = require('../../services/request.service');
    const { createScore, getAllScores } = require('./game.controller');
//

/*
Routes definition
*/
    class GameRouterClass {
        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }

        // Set route fonctions
        routes(){
        /**
         * Route to create new item
         * @param path: String => api endpoint
         * @param auth: Passport => use auth service to protect the route
         * @callback => create item and send back data
        */
            // Route for add score
            classRouter.post( '/add', (req, res) => {
                // Check request body
                if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, Vocabulary.errors.noBody) };
                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatory.game, req.body );

                //=> Error: bad fields provided
                if (!ok) { sendFieldsError(res, Vocabulary.errors.badFields, miss, extra) }
                else{
                    //=> Request is valid: use controller
                    createScore(req.body)
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
                };
            });

            // Route for getting all score
            classRouter.get( '/all', (req, res) => {
                    getAllScores()
                    .then( apiResponse => sendApiSuccessResponse(res, Vocabulary.request.success, apiResponse) )
                    .catch( apiResponse => sendApiErrorResponse(res, Vocabulary.request.error, apiResponse))
            });

            // Route for testing
            classRouter.get('/', (req, res) => {
                res.send('GET request to the homepage');
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return classRouter;
        };
    };
//

/*
Export
*/
    module.exports = GameRouterClass;
//