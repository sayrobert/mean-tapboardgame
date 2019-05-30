/*
Imports
*/
    // NodeJS
    const { Router } = require('express');
    const passport = require('passport');

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);

    // Routers
    const AuthRouterClass = require('./auth/auth.routes');
    const FrontRouterClass = require('./front/front.routes');
    const GameRouterClass = require('./game/game.routes');
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/api', apiRouter);

    // Child
    const authRouter = new AuthRouterClass({ passport });
    const frontRouter = new FrontRouterClass({ passport });
    const gameRouter = new GameRouterClass({ passport });
    
//

/*
Configure routes
*/
    // Set API routers
    apiRouter.use('/auth', authRouter.init());

    // Set front router
    mainRouter.use('/', frontRouter.init());
    mainRouter.use('/game', gameRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//