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
        let sql = `SELECT * FROM Student`
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

    updateStudentPlugin = (student, res) => {
        let sql = `UPDATE Student
        SET name = ?, last_name = ?
        WHERE student_id = ?`
        connection.query(
            sql, [
                student.name,
                student.last_name,
                student.student_id
            ],
            function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("update student finished");
                    return res.status(201).send({ response: "update student finished" })
                }
            }
        )
    }

    addSubjectPlugin = (subject, res) => {
            let sql = `INSERT INTO Subject
            (
                subject_id, 
                subject_name,
                teacher_name
            )
            VALUES
            (
                ?, ?, ?
            )`
            connection.query(
                sql, [
                    subject.subject_id,
                    subject.subject_name,
                    subject.teacher_name,
                ],
                function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("add subject finished");
                        return res.status(201).send({ response: "create subject finished" })
                    }
                }
            )
        }


}
module.exports = {
    Plugin
}