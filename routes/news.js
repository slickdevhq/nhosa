const express = require('express');
const router = express.Router();
const News = require('../models/News');

// @route   GET api/news
// @desc    Get all news articles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const news = await News.find().sort({ date: -1 });
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/news/:id
// @desc    Get news article by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ msg: 'News article not found' });
    }
    
    res.json(news);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'News article not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/news
// @desc    Create a news article
// @access  Private (will be implemented with auth later)
router.post('/', async (req, res) => {
  try {
    const { title, content, excerpt, category, image, featured } = req.body;
    
    const newNews = new News({
      title,
      content,
      excerpt,
      category,
      image,
      featured
    });
    
    const news = await newNews.save();
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/news/:id
// @desc    Update a news article
// @access  Private (will be implemented with auth later)
router.put('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ msg: 'News article not found' });
    }
    
    // Update fields
    const { title, content, excerpt, category, image, featured } = req.body;
    if (title) news.title = title;
    if (content) news.content = content;
    if (excerpt) news.excerpt = excerpt;
    if (category) news.category = category;
    if (image) news.image = image;
    if (featured !== undefined) news.featured = featured;
    
    await news.save();
    res.json(news);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'News article not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/news/:id
// @desc    Delete a news article
// @access  Private (will be implemented with auth later)
router.delete('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ msg: 'News article not found' });
    }
    
    await news.remove();
    res.json({ msg: 'News article removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'News article not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;