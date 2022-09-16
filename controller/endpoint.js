const { Logic } = require('./logic');
const models = require('../model/model');

class Endpoint {

    constructor() {
        this.dataStudent = models.dataStudentModel;
    }

    createStudentEndpoint = (req, res) => {
        this.dataStudent.student_id = req.body.student_id;
        this.dataStudent.name = req.body.name;
        this.dataStudent.last_name = req.body.last_name;
        new Logic().createStudentLogic(this.dataStudent, res);
    }

    deleteStudentEndpoint = (req, res) => {
        this.dataStudent = req.body.student_id;
        new Logic().deleteStudentLogic(this.dataStudent, res);
    }

    getStudentEndpoint = (req, res) => {
        new Logic().getStudentLogic(res);
    }

}
module.exports = {
    Endpoint
}