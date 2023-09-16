import { Router } from 'express';
import taskController from 'controllers/task.controller';
import { asyncMiddleware } from 'middlewares/async.middleware';
import { createTaskValidation } from 'validations/create-task.validation';
import { requestValidator } from 'middlewares/request-validator.middleware';

const router: Router = Router();

router.get('/', asyncMiddleware(taskController.index));
router.post('/', asyncMiddleware(requestValidator(createTaskValidation())), asyncMiddleware(taskController.create));

export default router;
