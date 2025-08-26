const express = require('express');
const fs = require('fs');
const router = express.Router();
const filePath = './backend/data/projects.json';

// GET - listar projetos
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  res.json(data);
});

// POST - adicionar projeto
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const newProject = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    link: req.body.link
  };
  data.push(newProject);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).json(newProject);
});

module.exports = router;
