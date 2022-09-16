const connection = require('../datadase.connect/connector')
class Plugin {

    createStudentPlugin = (student) => {
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
            function(err, data) {
                if (err) {
                    console.log(err);
                }
                console.log(data)
            }
        )
    }


}
module.exports = {
    Plugin
}