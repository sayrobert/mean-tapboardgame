/*
Import
*/
const ScoreModel = require('../../models/score.model')
//

/*
Methods
*/
    // Add score to the database
    const createScore = body => {
        return new Promise( (resolve, reject) => {
            // Register new user
            ScoreModel.create(body)
            .then( mongoResponse => resolve(mongoResponse) )
            .catch( mongoResponse => reject(mongoResponse) )          
        });
    };

    // Get all scores from the database
    const getAllScores = () => {
        return new Promise( (resolve, reject) => {
            ScoreModel.find((error, item) => {
                // Request error
                if(error) { return reject(error) }
                else { return resolve(item) };
            });
        });
    };
//

/*
Export
*/
    module.exports = {
        createScore,
        getAllScores
    }
//