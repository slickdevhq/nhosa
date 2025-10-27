const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'default-event.jpg'
  },
  category: {
    type: String,
    default: 'General'
  },
  featured: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Event', EventSchema);