const express = require('express');
const router = express.Router();
const { Endpoint } = require('../controller/endpoint');

//create student
router.post("/createStudent", new Endpoint().createStudentEndpoint);

module.exports = router;