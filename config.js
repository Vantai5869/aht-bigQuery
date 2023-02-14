import { BigQuery } from '@google-cloud/bigquery';

const projectId = 'ban-do-295109';
const keyFilename = './ban-do-295109-1778efd47a19.json';
const bigquery = new BigQuery({ projectId, keyFilename });

export { bigquery };
