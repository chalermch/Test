const express = require('express');
const router = express.Router();
const { Endpoint } = require('../controller/endpoint.js');

//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

//delete student
router.delete("/deleteStudent", new Endpoint().deleteStudentEndpoint);

//get student
router.get("/getStudent", new Endpoint().getStudentEndpoint);

//get student by id
router.get("/getUserStudent", new Endpoint().getUserStudentEndpoint);

//update student
router.put("/updateStudentName", new Endpoint().updateStudentEndpoint);
// router.put("/updateStudent/:id", new Endpoint().updateStudentEndpoint);

//add subject
router.post("/addSubject", new Endpoint().addSubjectEndpoint);

//add score
router.post("/addScore", new Endpoint().addScoreEndpoint);

//update score
router.put("/updateScore", new Endpoint().updateScoreEndpoint);

//update subject
router.put("/updateSubject", new Endpoint().updateSubjectEndpoint);

module.exports = router;