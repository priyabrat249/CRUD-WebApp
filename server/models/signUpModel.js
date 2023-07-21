import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:String,
    
    email:String,
    password:String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var SignModel = mongoose.model('SignUp', userSchema);

export default SignModel;