const express = require('express');
const router = express.Router();

// @route   POST api/admissions
// @desc    Submit admission application
// @access  Public
router.post('/', async (req, res) => {
  try {
    // In a real application, this would save to database
    // For now, just return success
    console.log('Admission application received:', req.body);
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;