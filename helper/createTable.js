// helper/createTable.js
const { bigquery } = require('../config');

async function createTable(datasetId, tableId, schema) {
  // Tạo table với ID là tableId trong dataset với ID là datasetId
  const dataset = bigquery.dataset(datasetId);
  const table = dataset.table(tableId);
  await table.create({ schema });
  console.log(`Table ${table.id} đã được tạo.`);
}

module.exports = { createTable };