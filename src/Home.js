// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material"; 

const Home = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome to My Blog
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple blogging platform where you can read, create, update,
        and delete blog posts.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/create-post"
      >
        Create a New Post
      </Button>
    </div>
  );
};

export default Home;
