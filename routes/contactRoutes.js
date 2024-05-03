const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactContoller');

// GET all contacts
router.put('/all', contactController.getAllContacts);

// GET a contact by ID
router.get('/contacts/:id', contactController.getContactById);

// CREATE a new contact
router.post('/create', contactController.createContact);

// UPDATE a contact
router.put('/contacts/:id', contactController.updateContact);

// DELETE a contact
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
