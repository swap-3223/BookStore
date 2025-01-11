import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    fullName:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require:true,
        
    },
    password:{
        type:String,
        require:true,

    }

});

const UserModel = mongoose.model('User', UserSchema)

export default UserModel;