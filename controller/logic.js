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
    updateStudentNameLogic = (student, res) => {
        new Plugin().updateStudentNamePlugin(student, res);
    }

    //add subject
    addSubjectLogic = (subject, res) => {
        new Plugin().addSubjectPlugin(subject, res);
    }

    //add score
    addScoreLogic = (score, res) => {
        new Plugin().addScorePlugin(score, res);
    }

    //update score
    updateScoreLogic = (score, res) => {
        new Plugin().updateScorePlugin(score, res);
    }

    //update subject
    updateSubjectLogic = (subject, res) => {
        new Plugin().updateSubjectPlugin(subject, res);
    }


}
module.exports = {
    Logic
}