import { Router as createRouter } from 'express';
import { genkitHandler } from './genkit';

const router = createRouter();

router.post('/genkit', genkitHandler);

export default router;
