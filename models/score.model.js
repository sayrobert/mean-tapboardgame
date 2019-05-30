/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;

    // Javascript Web Token
    const jwt = require('jsonwebtoken');
//

/*
Mongoose schema deefinition
Declare each property and type needed for the schema
*/
    const scoreSchema = new Schema({
        userId: String,
        score: Number,
        date: String
    })
//

/*
/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const ScoreModel = mongoose.model('scores', scoreSchema);
    module.exports = ScoreModel;
//