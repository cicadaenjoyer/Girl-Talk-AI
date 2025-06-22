
const { BigQuery } = require('@google-cloud/bigquery');
import { UserProvider, type User } from '../context/UserContext.tsx';

// Create a client
const BIGQUERYCLIENT = new BigQuery();

async function createDatabase(user: User) {
  const [dataset] = await BIGQUERYCLIENT.createDatabase(user.db_id);

  console.log(`Dataset ${user.db_id} created.`);
}

async function getDatabase(user: User) {
  // Checks if the user has a database
  const [dataset] = await bigqueryClient.dataset(user.db_id);

  // Creates the database if it doesn't exist, otherwise returns it
  if (dataset.metadata.datasetReference) {
    return dataset
  } else { 
    console.log(`No database found for user ${user.id}.`);

    // Create the database if it doesn't exist
    [dataset] = await createDatabase();

    getDatabase(user);
  }
}
