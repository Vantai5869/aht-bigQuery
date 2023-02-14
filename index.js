import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createDataset, createTable, deleteDataset } from './helpers/index.js';

const app = express();
const port = process.env.PORT || 3000;

const projectId = 'my_project_id123';
const datasetId = 'my_dataset_1231';
const tableId = 'your_table_id11111';
const schema = [
  {
    name: 'name',
    type: 'STRING',
    mode: 'REQUIRED',
  },
  {
    name: 'age',
    type: 'INTEGER',
    mode: 'NULLABLE',
  },
];

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/create-table', async (req, res) => {
  try {
    await createDataset(datasetId);
    await createTable(datasetId, tableId, schema);
  } catch (error) {
    console.error(error);
  }

  res.json({
    success:true,
    message:'Hello World'
  });
});
app.get('/delete-dataset', async (req, res) => {
  try {
    await deleteDataset(datasetId);
    res.json({
      success:true
    })
  } catch (error) {
    console.error(error);
    res.json({
      success:false,
    });
  }

 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
