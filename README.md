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

{
	"username": "new_user7", 
  "name": "New User", 
  "email": "new_user7@gmail.com", 
  "phone_number": 38793478478786, 
  "password": "password",
	"role_id": 2
}

4. Get all students
GET https://international-school-sw.herokuapp.com/api/students

5. Get students by class
GET https://international-school-sw.herokuapp.com/api/students/classes/:class_id

6. Get students by grade
GET https://international-school-sw.herokuapp.com/api/students/grades/:grade_id

7. Get student by ID
GET https://international-school-sw.herokuapp.com/api/students/:id

8. Add new student
POST https://international-school-sw.herokuapp.com/api/students

{
  "name": "Jane Foster1",
  "grade_id": 1,
  "class_id": 5,
  "background": "too sleepy to write somithing",
  "status_id": 1,
  "age": 10,
  "insurance": 2,
  "birth_certificate": 1,
  "special_needs": "nothing",
  "contact_id": 1
}

9. Edit student
PUT https://international-school-sw.herokuapp.com/api/students/:id

{
  "name": "John Foster Jr",
  "grade_id": 1,
  "class_id": 5,
  "background": "too sleepy to write somithing",
  "status_id": 1,
  "age": 10,
  "insurance": 2,
  "birth_certificate": 1,
  "special_needs": "nothing",
  "contact_id": 1
}

10. Delete student
DELETE https://international-school-sw.herokuapp.com/api/students/:id
