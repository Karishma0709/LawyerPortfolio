const Contact = require("../model/contact")

exports.createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, organization, message } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      organization,
      message
    });

    // Save contact in the database
    await newContact.save();

    res.status(201).send({ message: 'Message received successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error occurred while saving the message.' });
  }
};

// Retrieve all Contacts
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send({ message: 'Error occurred while fetching messages.' });
  }
};
