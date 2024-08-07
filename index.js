const express = require('express');
const app = express();
const port = 3000;

const specializations = [
  {
    id: '1',
    name: 'Cardiology',
    description: 'Specializes in diagnosing and treating heart conditions.',
  },
  {
    id: '2',
    name: 'Neurology',
    description: 'Deals with disorders of the nervous system.',
  },
  {
    id: '3',
    name: 'Orthopedics',
    description:
      'Focuses on the musculoskeletal system, including bones, joints, and muscles.',
  },
  {
    id: '4',
    name: 'Pediatrics',
    description:
      'Provides medical care for infants, children, and adolescents.',
  },
  {
    id: '5',
    name: 'Dermatology',
    description: 'Treats skin conditions and diseases.',
  },
  {
    id: '6',
    name: 'Psychiatry',
    description:
      'Specializes in diagnosing and treating mental health disorders.',
  },
  {
    id: '7',
    name: 'Oncology',
    description: 'Focuses on the treatment of cancer.',
  },
  {
    id: '8',
    name: 'Gastroenterology',
    description: 'Deals with disorders of the digestive system.',
  },
  {
    id: '9',
    name: 'Endocrinology',
    description: 'Specializes in hormone-related diseases.',
  },
  {
    id: '10',
    name: 'Ophthalmology',
    description: 'Focuses on eye and vision care.',
  },
];

app.get('/specializations', (req, res) => {
  res.json(specializations);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
