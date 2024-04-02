import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose from "mongoose";

const videoSchema=new mongoose.Schema({},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const video=mongoose.model("video",videoSchema);