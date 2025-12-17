const Student = require("../models/Student");


exports.createStudent = async (req, res) => {
  try {
    const totalCount = await Student.countDocuments({});
    req.body.rollno = totalCount + 1;

    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  exports.getOneStudent = async (req, res) => {
  try {
    const rollno = Number(req.params.rollno); 

    const student = await Student.findOne({ rollno });
    // const students=await Student.findOne({name:})

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteStudent = async (req, res) => {
  try {
    const rollno = Number(req.params.rollno); 
    const student = await Student.findOneAndDelete({ rollno });
    
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { rollno: Number(req.params.rollno) }, 
      req.body,                              
      { new: true }     
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student updated", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};