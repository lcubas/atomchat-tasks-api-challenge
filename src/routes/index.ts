import { Router } from 'express';
import healthcheck from './healthcheck.route';

const router: Router = Router();

router.use('/healthcheck', healthcheck);

export default router;
