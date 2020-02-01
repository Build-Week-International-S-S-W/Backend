Some APIs for the beginning (will be updated during the process)

1. To get all users (administrator and social workers)
GET    https://international-school-sw.herokuapp.com/api/users

2. Login 
POST  https://international-school-sw.herokuapp.com/api/users/login

    username: "boss", 
    password: "YoullNeverGuess"

    username: "anna_maria", 
    password: "Bla_Bla_Bla"

    username: "johny", 
    password: "Just_Password"

3. Register 
POST  https://international-school-sw.herokuapp.com/api/users/register

4. Get all students
GET https://international-school-sw.herokuapp.com/api/students

5. Get students by class
GET https://international-school-sw.herokuapp.com/api/students/classes/:class_id

6. Get students by grade
GET https://international-school-sw.herokuapp.com/api/students/grades/:grade_id