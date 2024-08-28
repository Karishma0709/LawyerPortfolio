// const mongoose = require('mongoose');

// const blogSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Blog', blogSchema);



const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
  pdf: String,
  title:String
},{collection:"Bloginfo"})

mongoose.model("Bloginfo",blogSchema)