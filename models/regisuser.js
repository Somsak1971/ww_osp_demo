import mongoose from 'mongoose'

const regisuserSchema = new mongoose.Schema({
    company:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    password1:{
        type:String,
        required: true
    }
    } , {
        timestamps: true
});

export default mongoose.models.Regisuser || mongoose.model('Regisuser',regisuserSchema)