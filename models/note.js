const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongoose');
const SALT_ROUNDS = 6


const noteSchema = new Schema ({
    text:{
        type: String
    },
    user:{
        type:ObjectId
    }
}, {
    timestamps:true,
})
module.exports= mongoose.model('Note', noteSchema)