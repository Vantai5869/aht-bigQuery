import { bigquery } from '../config.js';

export async function createDataset(datasetId) {
  const dataset = bigquery.dataset(datasetId);
  await dataset.create({ location: 'US' });
  console.log(`Dataset ${dataset.id} đã được tạo.`);
}

export async function createTable(datasetId, tableId, schema) {
  const dataset = bigquery.dataset(datasetId);
  const table = dataset.table(tableId);
  await table.create({ schema });
  console.log(`Table ${table.id} đã được tạo.`);
}


export async function deleteDataset(datasetId) {
  const dataset = bigquery.dataset(datasetId);
  await dataset.delete({ force: true });
  console.log(`Dataset ${datasetId} deleted successfully.`);
}
