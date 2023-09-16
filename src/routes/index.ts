import { Router } from 'express';
import healthcheck from './healthcheck.route';
import task from './task.route';

const router: Router = Router();

router.use('/healthcheck', healthcheck);
router.use('/tasks', task);

export default router;
