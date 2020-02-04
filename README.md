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
  "password": "password"
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

  "name": "Johny Ground",  => string, has to be unique


  "student_grade": "middle",   => string, "elementary", "middle" or "high"


  "student_class": 8, => number from 1 to 12


  "background": "too sleepy to write somithing", => string


  "student_status": "student", => string, "student", "past student" or "visitor"


  "age": 14, => number


  "insurance": 1, => boolean, 0 or 1


  "birth_certificate": 1, => boolean, 0 or 1


  "special_needs": "alergy: oranges", => string


	"student_contact": "name: 'James Ground', phone number: 675565567, email:     'james_g@gmail.com'", => string (you can write it without that name/phone number etc; just string)

  
	"social_worker": "anna_maria" => has to be existing username of social worker, string, right now in data base just two social workers "anna_maria" and "johny"

9. Edit student
PUT https://international-school-sw.herokuapp.com/api/students/:id

The same as ADD student

10. Delete student
DELETE https://international-school-sw.herokuapp.com/api/students/:id
