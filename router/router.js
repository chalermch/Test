const express = require('express');
const router = express.Router();
const { Endpoint } = require('../controller/endpoint.js');


//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

//delete student
router.delete("/deleteStudent", new Endpoint().deleteStudentEndpoint);

//get student
router.get("/getStudent", new Endpoint().getStudentEndpoint);

module.exports = router;