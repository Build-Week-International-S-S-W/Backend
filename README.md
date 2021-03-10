# International School Social Worker


**Heroku link:**
[https://international-school-sw.herokuapp.com]


=======================================================================

**Front-End:**
[https://github.com/Build-Week-International-S-S-W/Front-end]


=======================================================================


## USER ROUTERS

=======================================================================

### **_`REGISTER`_**


**POST  `/api/users/register`**


#### Headers

Name | Description
:---: | :---:
Content-Type | application/json


#### Body

Name | Type | Required | Details
:---: | :---: | :---: | :---: 
username | "String" | Yes | Must be unique
name | "String" | No | 
email | "String" | No | Must be unique
phone_number | Number | No | Must be unique
password | "String" | Yes | 


#### Example of the body

```
{
	"username": "new_user2", 
  "name": "New User2", 
  "email": "new_user2@gmail.com", 
  "phone_number": 4324324324, 
  "password": "password"
}
```

#### Responses

##### 201 Created

```
{
  "u_id": 9,
  "username": "new_user2", 
  "name": "New User2", 
  "email": "new_user2@gmail.com", 
  "phone_number": 4324324324, ,
  "role": "social worker"
}
```


##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```


-----------------------------------------------------------------------


### **_`LOGIN`_**


**POST  `/api/users/login`**


#### Headers

Name | Description
:---: | :---:
Content-Type | application/json


#### Body

Name | Type | Required | Details
:---: | :---: | :---: | :---: 
username | "String" | Yes | Must be unique
password | "String" | Yes | 


#### Example of the body

```
{
  username: "johny", 
  password: "Just_Password"
}
```

#### Responses

##### 200 OK

```
{
  "message": "Welcome johny",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6Im5ld191c2VyMiIsImlhdCI6MTU4MDg3NjU5NywiZXhwIjoxNTgxNDgxMzk3fQ.KHyM1TRfjcJ-l1RalgyDs1fGXUzelsz1zYe-rqyJIBQ"
}
```

##### 401 Unauthorized

```
{
  "message": "Invalid Credentials"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```

-----------------------------------------------------------------------


### **_`GET ALL USERS`_**


**GET  `/api/users`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 200 OK

```
[
  {
    "id": 1,
    "username": "boss",
    "name": "Big Boss",
    "email": "big_boss@gmail.com",
    "phone_number": 1234567890,
    "role": "administrator"
  },
  {
    "id": 2,
    "username": "anna_maria",
    "name": "Anna Maria Superkind",
    "email": "anna_maria_superkind@gmail.com",
    "phone_number": 2345678901,
    "role": "social worker"
  }
]
```

##### 401 Unauthorized

```
{
  "message": "You have to be logged in!"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```


=======================================================================

## STUDENTS ROUTERS

=======================================================================


### **_`GET ALL STUDENTS`_**


**GET  `/api/students`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 200 OK

```
[
  {
    "id": 1,
    "name": "Jane Humilton",
    "grade": "high",
    "class": 9,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 15,
    "insurance": 1,
    "birth_certificate": 1,
    "special_needs": "none",
    "student_contact": "name: 'Gretta Humilton', phone number: 342865467, email: 'gretta_humilton@gmail.com'",
    "social_worker": "anna_maria"
  },
  {
    "id": 2,
    "name": "Mary Rock",
    "grade": "middle",
    "class": 8,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 14,
    "insurance": 1,
    "birth_certificate": 1,
    "special_needs": "alergy: oranges",
    "student_contact": "name: 'George Rock', phone number: 389568399, email: 'george_rock@gmail.com'",
    "social_worker": "johny"
  }
]
```

##### 401 Unauthorized

```
{
  "message": "You have to be logged in!"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```

-----------------------------------------------------------------------


### **_`GET STUDENTS BY CLASS`_**


**GET  `/api/students/classes/:class_id`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 200 OK

```
[
  {
    "id": 2,
    "name": "Mary Rock",
    "grade": "middle",
    "class": 8,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 14,
    "insurance": 1,
    "birth_certificate": 1,
    "special_needs": "alergy: oranges",
    "student_contact": "name: 'George Rock', phone number: 389568399, email: 'george_rock@gmail.com'",
    "social_worker": "johny"
  },
  {
    "id": 3,
    "name": "John Calm",
    "grade": "middle",
    "class": 8,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 14,
    "insurance": 0,
    "birth_certificate": 1,
    "special_needs": "none",
    "student_contact": "name: 'Clara Calm', phone number: 111111111, email: 'clara_2222@gmail.com'",
    "social_worker": "johny"
  }
]
```

##### 401 Unauthorized

```
{
  "message": "You have to be logged in!"
}
```

##### 404 Not Found

```
{
  "message": "Can't find this class"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```

-----------------------------------------------------------------------


### **_`GET STUDENTS BY GRADE`_**


**GET  `/api/students/grades/:grade_id`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 200 OK

```
[
  {
    "id": 4,
    "name": "Angela Clark",
    "grade": "elementary",
    "class": 4,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 10,
    "insurance": 1,
    "birth_certificate": 1,
    "special_needs": "none",
    "student_contact": "name: 'Rick Clark', phone number: 3388872992, email: 'r_clark@gmail.com'",
    "social_worker": "maria_2020"
  },
  {
    "id": 5,
    "name": "Leo Foster",
    "grade": "elementary",
    "class": 4,
    "background": "too sleepy to write something",
    "status": "student",
    "age": 10,
    "insurance": 1,
    "birth_certificate": 1,
    "special_needs": "none",
    "student_contact": "name: 'Lilia Foster', phone number: 47837687378, email: 'l_f123@gmail.com'",
    "social_worker": "alex_k"
  }
]
```

##### 401 Unauthorized

```
{
  "message": "You have to be logged in!"
}
```

##### 404 Not Found

```
{
  "message": "Can't find this grade"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```

-----------------------------------------------------------------------


### **_`GET STUDENTS BY ID`_**


**GET  `/api/students/:id`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 200 OK

```
{
  "s_id": 2,
  "name": "Mary Rock",
  "grade": "middle",
  "class": 8,
  "background": "too sleepy to write something",
  "status": "student",
  "age": 14,
  "insurance": 1,
  "birth_certificate": 1,
  "special_needs": "alergy: oranges",
  "student_contact": "name: 'George Rock', phone number: 389568399, email: 'george_rock@gmail.com'",
  "social_worker": "johny"
}
```

##### 401 Unauthorized

```
{
  "message": "You have to be logged in!"
}
```

##### 404 Not Found

```
{
  "message": "Could not find student with given ID"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```

-----------------------------------------------------------------------


### **_`ADD NEW STUDENT`_**


**POST  `/api/students`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in
Content-Type |  | Yes | application/json


#### Body

Name | Type | Required | Details
:---: | :---: | :---: | :---: 
name | "String" | Yes | Must be unique
student_grade | "String" | No | Should be one of three: "elementary", "middle" or "high"
student_class | Number | No | Should be between 1-12
background | "String" | No | 
student_status | "String" | No | Should be one of three: "student", "past student" or "visitor"
age | Number | No | 
insurance | Boolean | No | Default to "False"; Should be 0 or 1 
birth_certificate | Boolean | No | Default to "True"; Should be 0 or 1 
special_needs | "String" | No | 
student_contact | "String" | No | 
social_worker | "String" | No | username of social worker



#### Example of the body

_The fields that aren't required can be missed in this request_


```
{
  "name": "Johny Ground",
  "student_grade": "middle",
  "student_class": 8,
  "background": "too sleepy to write somithing",
  "student_status": "student",
  "age": 14,
  "insurance": 1,
  "birth_certificate": 1,
  "special_needs": "alergie: oranges",
	"student_contact": "name: 'James Ground', phone number: 675565567, email: 'james_g@gmail.com'",
	"social_worker": "anna_maria"
}
```

#### Responses

##### 201 Created

```
{
  "s_id": 21,
  "name": "Johny Ground",
  "grade": "middle",
  "class": 8,
  "background": "too sleepy to write somithing",
  "status": "student",
  "age": 14,
  "insurance": 1,
  "birth_certificate": 1,
  "special_needs": "alergie: oranges",
  "student_contact": "name: 'James Ground', phone number: 675565567, email: 'james_g@gmail.com'",
  "social_worker": "anna_maria"
}
```


##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```


-----------------------------------------------------------------------


### **_`EDIT STUDENT`_**


**PUT  `/api/students/:id`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in
Content-Type |  | Yes | application/json


#### Body

Name | Type | Required | Details
:---: | :---: | :---: | :---: 
name | "String" | Yes | Must be unique
student_grade | "String" | No | Should be one of three: "elementary", "middle" or "high"
student_class | Number | No | Should be between 1-12
background | "String" | No | 
student_status | "String" | No | Should be one of three: "student", "past student" or "visitor"
age | Number | No | 
insurance | Boolean | No | Default to "False"; Should be 0 or 1 
birth_certificate | Boolean | No | Default to "True"; Should be 0 or 1 
special_needs | "String" | No | 
student_contact | "String" | No | 
social_worker | "String" | No | username of social worker



#### Example of the body

_The fields that aren't required can be missed in this request_

```
{
  "name": "Johny Ground1",
  "student_grade": "middle",
  "student_class": 8,
  "background": "too sleepy to write somithing",
  "student_status": "student",
  "age": 14,
  "insurance": 1,
  "birth_certificate": 1,
  "special_needs": "alergie: oranges",
	"student_contact": "name: 'James Ground', phone number: 675565567, email: 'james_g@gmail.com'",
	"social_worker": "anna_maria"
}
```

#### Responses

##### 200 OK

```
{
  "s_id": 21,
  "name": "Johny Ground1",
  "grade": "middle",
  "class": 8,
  "background": "too sleepy to write somithing",
  "status": "student",
  "age": 14,
  "insurance": 1,
  "birth_certificate": 1,
  "special_needs": "alergie: oranges",
  "student_contact": "name: 'James Ground', phone number: 675565567, email: 'james_g@gmail.com'",
  "social_worker": "anna_maria"
}
```

##### 404 Not Found

```
{
  "message": "Could not find student with given ID"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```


-----------------------------------------------------------------------




### **_`DELETE STUDENT`_**


**DELETE  `/api/students/:id`**


#### Headers

Name | Type | Required | Description
:---: | :---: | :---: | :---: 
Authorization | token | Yes | User must be loged in


#### Responses

##### 204 No Content

_There is no body in this response_

##### 404 Not Found

```
{
  "message": "Could not find user with given ID"
}
```

##### 500 Internal Server Error
```
{
  "message": "Something went wrong"
}
```
