const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.methods.comparePasswords = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});


module.exports = mongoose.model("user", UserSchema);