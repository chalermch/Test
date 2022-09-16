const connection = require('../datadase.connect/connector')
class Plugin {

    createStudentPlugin = (student, res) => {
        let sql = `INSERT INTO Student
        (
            student_id, 
            name,
            last_name
        )
        VALUES
        (
            ?, ?, ?
        )`
        connection.query(
            sql, [
                student.student_id,
                student.name,
                student.last_name,
            ],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("create student finish");
                    return res.status(201).send({ response: "create student finish" })
                }
            }
        )
    }


}
module.exports = {
    Plugin
}