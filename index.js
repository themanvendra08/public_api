const express = require('express');
const app = express();
const port = 3000;

const specializations = {
  Cardiologist: 'CA',
  Neurologist: 'NE',
  Orthopedist: 'OR',
  Pediatrician: 'PE',
  Dermatologist: 'DE',
  Psychiatrist: 'PS',
  Oncologist: 'ON',
  Gastroenterologist: 'GA',
  Endocrinologist: 'EN',
  Ophthalmologist: 'OP',
  Normal_Check_Ups: 'NC',
  General_Check_Ups: 'GC',
};

app.get('/specializations', (req, res) => {
  res.json(specializations);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
