const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');
const config = require('../config');

const connection = mongoose.createConnection(config.mongo);

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        default: uuidv4,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Working'
    },
    logged: {
        type: Boolean,
        default: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { _id: false });

UserSchema.statics.login = function ({username}) {
    return User
        .findOne({
            username
        })
        .then(result => {
            if (result) {
                return User.findOneAndUpdate({_id: result._doc._id}, {$set: {logged: true}})
                    .then(() => {
                        return result._doc;
                    });
            } else {
                const user = {
                    username
                };
                return User.create(user);
            }
        });
};

UserSchema.statics.logout = function ({_id}) {
    return User.findOneAndUpdate({_id}, {$set: {logged: false}});
};

UserSchema.statics.updateStatus = function ({_id, status}) {
    return User.findOneAndUpdate({_id}, {$set: {status}});
};

UserSchema.statics.list = function (_id) {
    return User.find({_id: {$ne: _id}, logged: true});
};

const User = connection.model('User', UserSchema);

module.exports = User;