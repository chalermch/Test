const { Plugin } = require('../controller/plugin');
class Logic {

    //create student
    createStudentLogic = (student, res) => {
        //validate empthy

        //add to database
        new Plugin().createStudentPlugin(student, res);
    }

    //delete student
    deleteStudentLogic = (student, res) => {
        new Plugin().deleteStudentPlugin(student, res);
    }

    //get student
    getStudentLogic = (res) => {
        new Plugin().getAllStudentPlugin(res);

    }

    //update student
    updateStudentLogic = (student, res) => {
        new Plugin().updateStudentPlugin(student, res);
    }

    //update score

    //add subject
    addSubjectLogic = (subject, res) => {
        new Plugin().addSubjectPlugin(subject, res);
    }

    //add score
    addScore = (score, res) => {
        new Plugin().addSubjectPlugin(score, res);
    }
}
module.exports = {
    Logic
}