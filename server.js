const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        message: 'שם, דוא"ל, נושא והודעה הם שדות חובה' 
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email',
        message: 'כתובת דוא"ל לא תקינה' 
      });
    }
    
    // Create contact data object
    const contactData = {
      id: Date.now(),
      name,
      email,
      phone: phone || 'N/A',
      subject,
      message,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleString('he-IL')
    };
    
    // Save to file (in production, save to database)
    const contactsFile = path.join(__dirname, 'contacts.json');
    let contacts = [];
    
    try {
      const fileContent = await fs.readFile(contactsFile, 'utf-8');
      contacts = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist yet, start with empty array
      contacts = [];
    }
    
    contacts.push(contactData);
    await fs.writeFile(contactsFile, JSON.stringify(contacts, null, 2));
    
    console.log('New contact form submission:', contactData);
    
    res.status(200).json({ 
      success: true,
      message: 'הודעה נשלחה בהצלחה',
      data: contactData
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Server error',
      message: 'אירעה שגיאה בשרת. אנא נסה שוב מאוחר יותר.' 
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/api/contacts', async (req, res) => {
  try {
    const contactsFile = path.join(__dirname, 'contacts.json');
    const fileContent = await fs.readFile(contactsFile, 'utf-8');
    const contacts = JSON.parse(fileContent);
    res.json(contacts);
  } catch (error) {
    res.json([]);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Contact form endpoint: http://localhost:${PORT}/api/contact`);
});
