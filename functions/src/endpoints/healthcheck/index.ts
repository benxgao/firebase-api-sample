import { Router as createRouter } from 'express';
import logger from '../../services/firebase/logger';
import { getSecret } from '../../services/gcp/secret-manager';

const router = createRouter();

router.get('/', async (req, res) => {
  const testSecret = await getSecret('TEST');

  logger.info(`Healthcheck endpoint hit
    | secret_manager: ${JSON.stringify(testSecret)}
    | env_file: ${process.env.TEST_ENV}
    | env: ${process.env.GCP_PROJECT_NUMBER}`);

  res.send('Hello World!');
});

export default router;
