const express = require('express');
const cors = require('cors');
const projectsRouter = require('./routes/projects');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectsRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
