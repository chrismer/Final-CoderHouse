const mongoose = require ("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name:{type: String, required:true, },
        lastname: {type: String, required:true, },
        email:{type: String, required:true, unique:true},
        password: {type: String, required:true},
        phone: {type:Number, require:true},
        url: {type: String, required:true},
        isAdmin:{type: Boolean, default:false}

    }
);

module.exports = mongoose.model("User", UserSchema)