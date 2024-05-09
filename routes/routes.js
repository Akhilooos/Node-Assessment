import express from "express";
import { addTask, deleteTask, editTask, getAllTasks, getEachTask } from "../controllers/controller.js";
const router = express.Router();


router.route('/').get(getAllTasks).post(addTask);
router.route('/:id').get(getEachTask).patch(editTask).delete(deleteTask);

export default router;