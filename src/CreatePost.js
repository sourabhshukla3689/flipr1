// src/components/CreatePost

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Grid } from "@mui/material"; 
import axios from "axios"; // 
const apiUrl = "http://localhost:5000/api/posts";
const CreatePost = () => {
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(apiUrl, newPost)
      .then((response) => {
        console.log("Post created:", response.data);
        
        navigate.push("/");
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create a New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              label="Title"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              label="Content"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreatePost;
