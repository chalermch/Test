const { Logic } = require('./logic');
const models = require('../model/model.js');

class Endpoint {

    constructor() {
        this.student = models.student
    }

    createStudentEndpoint = (res, req) => {
        this.student.student_id = req.body.student_id;
        this.student.name = req.body.name;
        this.student.last_name = req.body.last_name;
        new Logic().createStudentLogic(res, this.student);
    }

}
module.exports = {
    Endpoint
}