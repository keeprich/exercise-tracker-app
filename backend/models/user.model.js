// import { Mongoose } from "mongoose";
// import { Schema as _Schema } from 'mongoose';
const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3
    },
    
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.export = User;