// helper/createDataset.js
const { bigquery } = require('../config');

async function createDataset(datasetId) {
  // Tạo dataset với ID là datasetId
  const dataset = bigquery.dataset(datasetId);
  await dataset.create({ location: 'US' });
  console.log(`Dataset ${dataset.id} đã được tạo.`);
}

module.exports = { createDataset };