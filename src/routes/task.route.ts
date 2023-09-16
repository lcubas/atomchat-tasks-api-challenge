import { Router } from 'express';
import taskController from 'controllers/task.controller';
import { asyncMiddleware } from 'middlewares/async.middleware';
import { createTaskValidation } from 'validations/create-task.validation';
import { requestValidator } from 'middlewares/request-validator.middleware';
import { updateTaskValidation } from 'validations/update-task.validation';

const router: Router = Router();

router.get('/', asyncMiddleware(taskController.index));
router.post('/', asyncMiddleware(requestValidator(createTaskValidation())), asyncMiddleware(taskController.create));
router.put('/:id', asyncMiddleware(requestValidator(updateTaskValidation())), asyncMiddleware(taskController.update));
router.delete('/:id', asyncMiddleware(taskController.remove));

export default router;
