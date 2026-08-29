const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configure EJS View Engine (Tasks 4 & 5)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json()); // Parses JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded form data (Task 5)

// Root Route
app.get('/', (req, res) => {
  res.send(`
    <h2>Express Lab Directory</h2>
    <ul>
      <li><a href="/text">Task 1: Text Response</a></li>
      <li><a href="/html">Task 1: HTML Response</a></li>
      <li><a href="/json">Task 1: JSON Response</a></li>
      <li><a href="/calculator?num1=10&num2=5&operation=add">Task 2: Calculator API (Example)</a></li>
      <li><a href="/students">Task 3: Get All Students</a></li>
      <li><a href="/timetable">Task 4: Timetable (EJS)</a></li>
      <li><a href="/register">Task 5: Student Registration Form (EJS)</a></li>
    </ul>
  `);
});

// ==========================================
// Task 1: Basic Server Formats
// ==========================================
app.get('/text', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Name: John Doe | Roll Number: 123456 | Branch: Computer Science');
});

app.get('/html', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Student Info</title></head>
      <body>
        <h1>Student Information</h1>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Roll Number:</strong> 123456</p>
        <p><strong>Branch:</strong> Computer Science</p>
      </body>
    </html>
  `);
});

app.get('/json', (req, res) => {
  res.json({
    name: 'John Doe',
    rollNumber: '123456',
    branch: 'Computer Science'
  });
});

// ==========================================
// Task 2: Calculator API
// ==========================================
app.get('/calculator', (req, res) => {
  const { num1, num2, operation } = req.query;

  if (!num1 || !num2 || !operation) {
    return res.status(400).json({ error: 'Please provide num1, num2, and operation query parameters.' });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: 'num1 and num2 must be valid numbers.' });
  }

  let result;
  switch (operation.toLowerCase()) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    case 'divide':
      if (n2 === 0) return res.status(400).json({ error: 'Division by zero is not allowed.' });
      result = n1 / n2;
      break;
    case 'modulus':
      result = n1 % n2;
      break;
    case 'power':
      result = Math.pow(n1, n2);
      break;
    default:
      return res.status(400).json({ error: 'Invalid operation.' });
  }

  res.json({ num1: n1, num2: n2, operation, result });
});

// ==========================================
// Task 3: Student Management API
// ==========================================
let students = [
  { id: 1, name: 'Alice Smith', branch: 'Computer Science', rollNumber: 'CS101' },
  { id: 2, name: 'Bob Jones', branch: 'Information Technology', rollNumber: 'IT102' }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found.' });
  }

  res.json(student);
});

app.post('/students/add', (req, res) => {
  const { name, branch, rollNumber } = req.body;

  if (!name || !branch || !rollNumber) {
    return res.status(400).json({ error: 'Please provide name, branch, and rollNumber.' });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    branch,
    rollNumber
  };

  students.push(newStudent);
  res.status(201).json({ message: 'Student added successfully!', student: newStudent });
});

// ==========================================
// Task 4: EJS Timetable Route
// ==========================================
app.get('/timetable', (req, res) => {
  const timetableData = [
    { day: 'Monday', time: '09:00 AM - 10:30 AM', subject: 'Data Structures', faculty: 'Dr. Smith' },
    { day: 'Tuesday', time: '11:00 AM - 12:30 PM', subject: 'Web Technologies', faculty: 'Prof. Johnson' },
    { day: 'Wednesday', time: '02:00 PM - 03:30 PM', subject: 'Database Management', faculty: 'Dr. Williams' },
    { day: 'Thursday', time: '10:00 AM - 11:30 AM', subject: 'Operating Systems', faculty: 'Prof. Davis' },
    { day: 'Friday', time: '01:00 PM - 02:30 PM', subject: 'Software Engineering', faculty: 'Dr. Miller' }
  ];

  res.render('timetable', { timetable: timetableData });
});

// ==========================================
// Task 5: Form Handling Routes
// ==========================================
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { name, email, course, semester } = req.body;

  res.render('result', {
    name,
    email,
    course,
    semester
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});