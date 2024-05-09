import Task from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
    try {
        const taskList = await Task.find();
        res.status(200).json({ success: true, data: taskList });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching tasks" });
    }
};

const getEachTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskToFind = await Task.findById(id);
        if (!taskToFind) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, data: taskToFind });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while fetching the task data" });
    }
};

const addTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json({ success: true, data: newTask });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while creating a new task" });
    }
};

const editTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskToEdit = await Task.findByIdAndUpdate(id, req.body);
        if (!taskToEdit) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, data: taskToEdit });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while updating the task" });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskToDelete = await Task.findByIdAndDelete(id);
        if (!taskToDelete) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, data: taskToDelete });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "An error occurred while deleting the task" });
    }
};

export { getAllTasks, getEachTask, addTask, editTask, deleteTask };

