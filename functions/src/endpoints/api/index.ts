import { Router as createRouter } from 'express';
import ai from './ai';
import { verifyFirebaseToken } from '../../middlewares/firebase-auth';
import protectedResources from './protected-resources';

const router = createRouter();

router.use('/ai', verifyFirebaseToken, ai);

router.post('/protected-resources', verifyFirebaseToken, protectedResources);

export default router;
