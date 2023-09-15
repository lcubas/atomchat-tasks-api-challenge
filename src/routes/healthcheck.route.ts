import { Router } from 'express';
import index from 'controllers/healthcheck.controller';

const router: Router = Router();

router.get('/', index);

export default router;
