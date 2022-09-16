const { Plugin } = require('../datadase.connect/connector');
class Logic {

    //create student
    createStudentLogic = (res, student) => {
        //validate empthy

        //add to database
        new Plugin().createStudentPlugin(student);
    }

    //delete student

    //get student
}
module.exports = {
    Logic
}