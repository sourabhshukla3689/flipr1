const BlogPost = require('../models/BlogPost');

exports.getPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const post = await BlogPost.create({ title, content, author: req.userId, image });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, { title, content, image }, { new: true });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
