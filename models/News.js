const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'default-news.jpg'
  },
  date: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    default: 'Admin'
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('News', NewsSchema);