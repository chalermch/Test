const express = require('express');
const router = express.Router();
const { Endpoint } = require('../controller/endpoint.js');


//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

//delete student
router.delete("/deleteStudent", new Endpoint().deleteStudentEndpoint);

//get student
router.get("/getStudent", new Endpoint().getStudentEndpoint);

//update student
router.put("/updateStudent", new Endpoint().updateStudentEndpoint);
// router.put("/updateStudent/:id", new Endpoint().updateStudentEndpoint);

//add subject
router.post("/addSubject", new Endpoint().addSubjectEndpoint);

//add score
router.post("/addscore", new Endpoint().addScoreEndpoint);

module.exports = router;