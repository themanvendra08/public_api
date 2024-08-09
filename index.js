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

const products = {
  Laptop: 'LP',
  'Desktop Computer': 'DC',
  'Gaming PC': 'GP',
  Tablet: 'TB',
  Smartphone: 'SP',
  Monitor: 'MN',
  Keyboard: 'KB',
  'Mechanical Keyboard': 'MK',
  'Wireless Keyboard': 'WK',
  Mouse: 'MS',
  'Gaming Mouse': 'GM',
  'Wireless Mouse': 'WM',
  'Trackball Mouse': 'TM',
  Printer: 'PR',
  'Laser Printer': 'LP',
  'Inkjet Printer': 'IP',
  '3D Printer': '3P',
  Scanner: 'SC',
  'External Hard Drive': 'EH',
  'SSD Drive': 'SD',
  'USB Flash Drive': 'UF',
  'Memory Card': 'MC',
  Router: 'RT',
  'Wi-Fi Extender': 'WE',
  Modem: 'MD',
  Headphones: 'HP',
  'Wireless Headphones': 'WH',
  Earbuds: 'EB',
  'Bluetooth Speaker': 'BS',
  Webcam: 'WC',
  Microphone: 'MI',
  'VR Headset': 'VR',
  Smartwatch: 'SW',
  'Fitness Tracker': 'FT',
  'Smart Home Hub': 'SH',
  'Smart Light Bulb': 'SL',
  'Smart Thermostat': 'ST',
  'Smart Lock': 'SK',
  'External Monitor': 'EM',
  Projector: 'PJ',
  'Gaming Console': 'GC',
  'Portable Charger': 'PC',
  'Power Bank': 'PB',
  'Surge Protector': 'SP',
  'Graphics Tablet': 'GT',
  'Drawing Tablet': 'DT',
  Drone: 'DR',
  'Action Camera': 'AC',
  'Digital Camera': 'DC',
  Camcorder: 'CM',
};

app.get('/specializations', (req, res) => {
  res.json(specializations);
});

app.get('/symptoms', (req, res) => {
  res.json(symptoms);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
