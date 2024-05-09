import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required']

    },
    description:{
        type:String,
        
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Task = mongoose.model('Task',taskSchema);

export default Task;