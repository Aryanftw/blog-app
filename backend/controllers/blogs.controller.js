import express from "express"
import { Blog } from "../models/blogs.model.js"
export const postblog = async(req,res) => {
    const {title,description,author} = req.body;
    if(!title || !description || !author){
      return res.status(400).send("Please fill all the fields");
    }
    try {
      const data = await Blog.create({title,description,author})
      console.log("Blog added successfully ",data);
      return res.status(200).send("Blog added successfully")
    } catch (error) {
      console.log("Error in post blog controller ",error.message);
      return res.status(500).send("Internal Server Error")
    }
}

export const getblogbytitle = async (req,res) => {
  const title = req.query.title;
  if(!title){
    return res.status(400).send("Please provide title");
  }

  try {
    const data = await Blog.findOne({title})
    if(!data){
      return res.status(400).send("Blog not found");
    }
    console.log("Got the blog relating to the title")
    return res.status(200).send(data);

  } catch (error) {
    console.log("Error in finding blog controller ",error.message);
    return res.status(500).send("Internal server error");
  }
}

export const getblogs = async (req,res) => {
  try {
    const blogs = await Blog.find().sort({createdAt : -1});
    if(!blogs){
      return res.status(400).send("No blogs found");
    }
    return res.status(200).send(blogs);
  } catch (error) {
    console.log("Error in get all blogs controller ",error.message)
    return res.status(500).send("Internal server error");
  }
}

export const latestblogs = async (req,res) => {
  try {
    const latest = await Blog.find().sort({createdAt : -1}).limit(3)
    console.log("Retrieved 3 latest blogs");
    return res.status(200).send(latest)
  } catch (error) {
    console.log("Error in latest blogs controller ",error.message)
    return res.status(500).send("Internal server error");
  }
}


export const getblogbyId = async (req,res) => {
  try {
     const {id} = req.params;
     const blog = await Blog.findById(id);
     if(!blog){
       return res.status(400).send("Blog not found");
     }
     return res.status(200).send(blog);
  } catch (error) {
    console.log("Error in get blog by id controller")
    return res.status(500).send("Internal server error");
  }
}