import { Router } from 'express';
import index from '../controllers/task.controller';
import { asyncRoute } from 'middlewares/async-route.middleware';

const router: Router = Router();

router.get('/', asyncRoute(index));

export default router;
