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

    deleteStudentPlugin = (student, res) => {
        let sql = ` DELETE FROM Student 
                    WHERE student_id = ? `
        connection.query(sql, [student.student_id],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    return res.status(201).send({ response: "delete student finish" })
                }
            })
    }

    getAllStudentPlugin = (res) => {
        let sql = ` SELECT st.student_id,name,last_name,sj.subject_name,sc.score 
                    FROM Student st 
                    INNER JOIN Score sc   on sc.student_id = st.student_id
                    INNER JOIN Subject sj on sc.subject_id = sj.subject_id
                    `
        connection.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return res.status(200).send({ response: result });
            }
        })
    }

    getUserStudentPlugin = (student, res) => {
        let sql = `SELECT * FROM Student WHERE student_id = ?`
        connection.query(sql, [student.student_id],
            function(err) {
                if (err) {
                    console.log(err);
                }
            })
    }


}
module.exports = {
    Plugin
}