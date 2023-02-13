var express = require('express');
var app = express();
const { createDataset, createTable } = require('./helpers');


const projectId = 'my_project_id123';
const datasetId = 'my_dataset_1231';
const tableId = 'your-table-id';
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


app.get('/',async function (req, res) {
    createDataset(projectId, datasetId)
    .then(() => createTable(projectId, datasetId, tableId, schema))
    .catch((error) => console.error(error));

   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})
