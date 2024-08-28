const express = require('express');
const router = express.Router();
const contactController = require("../controller/contactController")

// Route to create a new contact message
router.post('/contact', contactController.createContact);

// Route to get all contact messages (Admin portal)
router.get('/contacts', contactController.getContacts);

module.exports = router;
