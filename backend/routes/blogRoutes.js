const express = require('express');
const multer = require('multer');
const { default: mongoose } = require('mongoose');

// const { createBlogPost, getBlogPosts } = require('../controller/blogController');

const router = express.Router();

// // Set up multer for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Routes
// router.post('/blogs', upload.single('image'), createBlogPost);
// router.get('/blogs', getBlogPosts);



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Blogfiles')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, uniqueSuffix + file.originalname)
  }
})

require('../model/blog')
const imageSchema=mongoose.model("Bloginfo")
const upload = multer({ storage: storage }) 


router.post("/blogs",upload.single("file"),async(req,res)=>{
  console.log(req.file)
  const title=req.body.title;
  const description=req.body.description;
  const fileName=req.file.filename
  try{
await imageSchema.create({title:title,pdf:fileName,description:description})
res.send({Status:"ok"})
  }catch(error){
res.json({status:error})
  }
})

router.get('/blogs',async(req,res)=>{
  try{imageSchema.find({}).then((data)=>{
res.send({status:"ok",data:data})
  })}catch(error){
  }
})


module.exports = router;
