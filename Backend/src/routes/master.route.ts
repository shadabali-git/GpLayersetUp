import { Router } from 'express';
import TasksRoute from "./TasksOperations/Tasks.route";
const router = Router();

//  here I use this
router.use(TasksRoute);

export default router;