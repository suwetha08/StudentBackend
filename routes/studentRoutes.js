const express = require("express");
const { createStudent, getAllStudents,getOneStudent,deleteStudent,updateStudent } = require("../controllers/studentController");
const router = express.Router();

router.post("/", createStudent);
router.get("/allstudents", getAllStudents);
router.get("/:rollno",getOneStudent);
router.delete("/:rollno",deleteStudent);
router.put("/:rollno", updateStudent);

module.exports = router;