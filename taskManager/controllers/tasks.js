const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const singleTask = await Task.findOne({ id: req.params._id });
    res.json({ singleTask });
    if (!singleTask) {
      return res.status(404).json({ msg: "cannot find" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = async (req, res) => {
  const { id: TaskID } = req.params;
  const deletedTask = await Task.deleteOne({ _id: TaskID });
  res.status(204).json({ deletedTask });
};

module.exports = {
  getAllTasks,
  getSingleTask,
  updateTask,
  createTask,
  deleteTask,
};
