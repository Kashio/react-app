const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
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
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

UserSchema.statics.login = function ({username}) {
    return User
        .findOne({
            username
        })
        .then(result => {
            if (result) {
                return result._doc;
            } else {
                const user = {
                    _id: uuidv1(),
                    username,
                    status: 'Working',
                    logged: true,
                    createAt: new Date()
                };
                return User.create(user);
            }
        });
};

UserSchema.statics.updateStatus = function ({_id, status}) {
    return User.findOneAndUpdate({_id}, {$set: {status}});
};

const connection = mongoose.createConnection('mongodb://localhost:27017/app');
const User = connection.model('User', UserSchema);

module.exports = User;