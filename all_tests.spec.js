const db = require("./data/dbConfig")
const supertest = require("supertest")
const usersModel = require("./api/users_auth/user_auth-model")
const studentsModel = require("./api/students/students-model")
const server = require("./index")


beforeEach(async () => {
    await db.seed.run()
})

describe("testing users", () =>{
    test("all users", async () => {
        const res = await usersModel.find()
        // console.log(res)
        expect(res.length).toBeGreaterThanOrEqual(3)
    })

    test("insert", async () => {
        await usersModel.add({ username: "new_user2", name: "New User2", 
                            email: "new_user2@gmail.com", phone_number: 555555555, 
                            password: "password" })
        const users = await db("users").select()
        expect(users.length).toEqual(6)
    })

    test("find user by id - phone number matches", async() => {
        const res = await usersModel.findById(1)
        expect(res.phone_number).toBe(1234567890)
    })

    test("find user by id - email matches", async() => {
        const res = await usersModel.findById(2)
        expect(res.email).toBe("anna_maria_superkind@gmail.com")
    })

    test("find user by id - mane matches", async() => {
        const res = await usersModel.findById(3)
        expect(res.name).toMatch(/johny helper/i)
    })

    test("create new user - api", async () => {
        const res = await supertest(server)
            .post("/api/users/register")
            .send({ username: "new_user2", name: "New User2", 
                email: "new_user2@gmail.com", phone_number: 4324324324, 
                password: "password"})
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("new_user2")
        expect(res.body.role).toBe("social worker")
    })

    test("login - api", async () => {
        const res = await supertest(server)
            .post("/api/users/login")
            .send({ username: "johny", password: "Just_Password"})        
        // console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome johny!")
    })

})

describe("testing students", () =>{
    test("get all students", async() => {
        const res = await studentsModel.find()
        expect(res.length).toBeGreaterThanOrEqual(2)
    })

    test("getting students by class", async() => {
        const res = await studentsModel.findByClass(8)
        expect(res).not.toHaveLength(0)
    })

    test("getting student by ID - social worker username matches", async() => {
        const res = await studentsModel.findById(2)
        // console.log(res)
        expect(res.social_worker).toMatch(/johny/i)
    })

    // ===================================================
    // login before sending the request to restricted API

    let token;
    beforeEach(async () => {
        let res = await supertest(server)
            .post("/api/users/login")
            .send({ username: "johny", password: "Just_Password"}) 
        token = res.body.token;
    })

    test("get students - api", async () => {
        const res = await supertest(server)
            .get("/api/students")
            .set("Authorization", token)
        // console.log(res)
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.length).toBeGreaterThan(0)
        expect(res.body[0].age).toBe(15)
        expect(res.body[1]).toHaveProperty("background")
    })

    test("get students by class - api", async() => {
        const res = await supertest(server)
            .get("/api/students/classes/8")
            .set("Authorization", token)
        // console.log(res.body)
        expect(res.body[0].grade).toBe("middle")
    })

    test("get students by grade - api", async() => {
        const res = await supertest(server)
            .get("/api/students/grades/2")
            .set("Authorization", token)
        // console.log(res.body)
        expect(res.body[0].class).toBeGreaterThanOrEqual(6)
        expect(res.body[0].class).toBeLessThanOrEqual(8)
    })

    test("get students by grade - api - error message 404", async() => {
        const res = await supertest(server)
            .get("/api/students/grades/4")
            .set("Authorization", token)
        // console.log(res.body.message)
        expect(res.status).toBe(404)
        expect(res.body.message).toMatch(/find this grade/i)
    })

    test("get students by ID - api", async() => {
        const res = await supertest(server)
            .get("/api/students/1")
            .set("Authorization", token)
        // console.log(res.body)
        expect(res.body.social_worker).toBe("anna_maria")
    })

    test("add new student - api", async() => {
        const res = await supertest(server)
            .post("/api/students")
            .send({
                name: "Johny Ground",
                student_grade: "middle",
                student_class: 8,
                background: "too sleepy to write somithing",
                student_status: "student",
                age: 14,
                insurance: 1,
                birth_certificate: 1,
                special_needs: "alergie: oranges",
                student_contact: "name: 'James Ground', phone number: 675565567, email: 'james_g@gmail.com'",
                social_worker: "anna_maria"
                })
            .set("Authorization", token)
        // console.log(res)
        expect(res.status).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.s_id).toBeGreaterThan(2)
    })

    test("add new student - api - error 500 (next(err))", async() => {
        const res = await supertest(server)
            .post("/api/students")
            .send({
                student_grade: "middle",
                student_class: 8,
                background: "too sleepy to write somithing",
                student_status: "student",
                age: 14
                })
            .set("Authorization", token)
        // console.log(res)
        expect(res.status).toBe(500)
    })

    test("edit student - api", async() => {
        const res = await supertest(server)
            .put("/api/students/2")
            .send({
                name: "Mary Rock",
                student_grade: "middle", 
                student_class: 8, 
                background: "too sleepy to write somithing", 
                student_status: "student", 
                age: 14, 
                insurance: false, 
                birth_certificate: true, 
                special_needs: "alergy: oranges", 
                student_contact: "name: 'George Rock', phone number: 389568399, email: 'george_rock@gmail.com'",
                social_worker: "johny"
                })
            .set("Authorization", token)
        // console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.insurance).toBe(0)
    })

    test("delete student", async() => {
        const res = await supertest(server)
            .delete("/api/students/2")
            .set("Authorization", token)
        // console.log(res)
        expect(res.status).toBe(204)
    })

    test("delete student - unauthorized", async() => {
        const res = await supertest(server)
            .delete("/api/students/2")
        // console.log(res)
        expect(res.status).toBe(401)
        expect(res.body.message).toMatch(/you have to be logged in/i)
    })
})