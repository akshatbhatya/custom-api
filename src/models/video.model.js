import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose from "mongoose";

const videoSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true

    },
    views:{
        type:Number,
        default:0
    },
    duration:{
        type:Number,
        required:true

    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    isPublished:{
        type:Boolean,
        default:true

    }
    ,
    videoFile:{
        type:String,
        required:true
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const video=mongoose.model("video",videoSchema);