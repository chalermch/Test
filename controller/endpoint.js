const { Logic } = require('./logic');
const models = require('../model/model');

class Endpoint {

    constructor() {
        this.dataStudent = models.dataStudentModel;
        this.dataSubject = models.dataSubjectModel;
        this.dataScore = models.dataScoreModel;
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

    updateStudentEndpoint = (req, res) => {
        this.dataStudent.student_id = req.body.student_id;
        this.dataStudent.name = req.body.name;
        this.dataStudent.last_name = req.body.last_name;
        new Logic().updateStudentLogic(this.dataStudent, res);
    }

    addSubjectEndpoint = (req, res) => {
        this.dataSubject.subject_id = req.body.subject_id;
        this.dataSubject.subject_name = req.body.subject_name;
        this.dataSubject.teacher_name = req.body.teacher_name;
        new Logic().addSubjectLogic(this.dataSubject, res);
    }

    addScoreEndpoint = (req, res) => {
        this.dataScore.student_id = req.body.student_id;
        this.dataScore.subject_id = req.body.subject_id;
        this.dataScore.score = req.body.score;
        new Logic().addScoreLogic(this.dataScore, res);
    }

    updateScoreEndpoint = (req, res) => {
        this.dataScore.student_id = req.body.student_id;
        this.dataScore.subject_id = req.body.subject_id;
        this.dataScore.score = req.body.score;
        new Logic().updateScoreLogic(this.dataScore, res);
    }

    updateSubjectEndpoint = (req, res) => {
        this.dataSubject.subject_id = req.body.subject_id;
        this.dataSubject.subject_name = req.body.subject_name;
        this.dataSubject.teacher_name = req.body.teacher_name;
        new Logic().updateSubjectLogic(this.dataSubject, res);
    }

}
module.exports = {
    Endpoint
}