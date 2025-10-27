const express = require('express');
const router = express.Router();

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', async (req, res) => {
  try {
    // In a real application, this would save to database and/or send email
    // For now, just return success
    console.log('Contact form received:', req.body);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;