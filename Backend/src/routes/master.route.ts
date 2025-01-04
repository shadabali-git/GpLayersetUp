import { Router } from 'express';
import {
    createTaskHandler,
    getAllTasksHandler,
    getTaskByIdHandler,
    updateTaskStatusHandler,
    deleteTaskHandler
} from '../controllers/taskController';

const router = Router();

router.post('/tasks', createTaskHandler);
router.get('/tasks', getAllTasksHandler);
router.get('/tasks/:id', getTaskByIdHandler);
router.put('/tasks/:id', updateTaskStatusHandler);
router.delete('/tasks/:id', deleteTaskHandler);

export default router;