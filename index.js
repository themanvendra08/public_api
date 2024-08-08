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
  'Normal Check Ups': 'NC',
  'General Check Ups': 'GC',
};

const symptoms = {
  Fever: 'FE',
  Cough: 'CO',
  Headache: 'HE',
  Fatigue: 'FA',
  'Sore Throat': 'ST',
  'Shortness of Breath': 'SB',
  'Runny Nose': 'RN',
  'Muscle Pain': 'MP',
  'Joint Pain': 'JP',
  Chills: 'CH',
  Sweating: 'SW',
  Nausea: 'NA',
  Vomiting: 'VO',
  Diarrhea: 'DI',
  Constipation: 'CS',
  'Abdominal Pain': 'AP',
  'Chest Pain': 'CP',
  Palpitations: 'PA',
  Dizziness: 'DZ',
  'Blurred Vision': 'BV',
  Tremors: 'TR',
  Rash: 'RA',
  Itching: 'IT',
  Swelling: 'SW',
  'Weight Loss': 'WL',
  'Weight Gain': 'WG',
  'Hair Loss': 'HL',
  'Increased Thirst': 'IT',
  'Increased Urination': 'IU',
  'Difficulty Swallowing': 'DS',
  Hoarseness: 'HO',
  'Ear Pain': 'EP',
  'Hearing Loss': 'HL',
  Nosebleed: 'NB',
  'Sinus Pressure': 'SP',
  Wheezing: 'WH',
  Heartburn: 'HB',
  'Difficulty Breathing': 'DB',
  Anxiety: 'AN',
  Depression: 'DE',
  Insomnia: 'IN',
  'Memory Loss': 'ML',
  Confusion: 'CF',
  Seizures: 'SZ',
  Fainting: 'FA',
  'Back Pain': 'BP',
  'Neck Pain': 'NP',
  'Shoulder Pain': 'SP',
  'Knee Pain': 'KP',
  'Hip Pain': 'HP',
};

app.get('/specializations', (req, res) => {
  res.json(specializations);
});

app.get('/symptoms', (req, res) => {
  res.json(symptoms);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
