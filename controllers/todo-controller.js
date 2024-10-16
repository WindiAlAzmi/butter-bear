const Todo = require("../models/Todo");

module.exports = {
  getAllTodo: async (req, res) => {
    const data = await Todo.find({});

    res.json({
      message: "Data berhasil ditemukan",
      data,
    });
  },
  getTodoById: async (req, res) => {
    const { id } = req.params;
    const getDataById = await Todo.findById(id).exec();

    res.json({
      message: "1 Data todo berhasil ditemukan",
      data: getDataById,
    });
  },
  addTodo: (req, res) => {
    const data = req.body;

    const newTodo = new Todo(data); //Model.init() --> pertama kali
    newTodo.save();

    res.json({
      message: "Data berhasil ditambahkan",
    });
  },
  editTodoById: async (req, res) => {
    const data = req.body;
    const { id } = req.params;


    data.updatedAt = Date.now();
    const updatedData = await Todo.findByIdAndUpdate(id, data, { new: true });

    res.json({
      message: "Data berhasil diubah",
      data: updatedData,
    });
    
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;

    try{
      await Todo.findByIdAndDelete(id);
      res.json({
        message: "Data berhasil dihapus",
      });
    }catch(err){

    }
  },
  deleteAllTodo: async (req, res) => {
    await Todo.deleteMany({});

    res.json({
      message: "Semua data todo berhasil dihapus",
    });
  },
};
