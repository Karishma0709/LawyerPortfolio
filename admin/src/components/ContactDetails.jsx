import React, { useEffect, useState } from 'react';

const ContactDetails = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch('http://localhost:5000/api/contacts');
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  return (
    <div id="contact-details" className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-extrabold text-center text-navy mb-6">Contact Us Details</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-navy rounded-lg shadow-md">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-4 py-3 text-left">S.No</th>
              <th className="px-4 py-3 text-left">First Name</th>
              <th className="px-4 py-3 text-left">Last Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Organization</th>
              <th className="px-4 py-3 text-left">Contact Number</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={contact._id}
                className="border-t border-navy odd:bg-gray-200 even:bg-gray-100 hover:bg-gray-300 transition-colors duration-200"
              >
                <td className="px-4 py-2 text-center font-medium text-navy">{index + 1}</td>
                <td className="px-4 py-2">{contact.firstName}</td>
                <td className="px-4 py-2">{contact.lastName}</td>
                <td className="px-4 py-2">{contact.email}</td>
                <td className="px-4 py-2">{contact.organization}</td>
                <td className="px-4 py-2">{contact.contactNumber}</td>
                <td className="px-4 py-2">{contact.message}</td>
                <td className="px-4 py-2">{new Date(contact.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDetails;
