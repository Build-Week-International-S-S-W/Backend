const db = require("../../data/dbConfig")
const supertest = require("supertest")
const usersModel = require("./user_auth-model")
const server = require("../../index")


beforeEach(async () => {
    await db.seed.run()
})

describe("testing users", () =>{
    test("all users", async () => {
        const res = await usersModel.find()
        expect(res.length).toBeGreaterThanOrEqual(3)
    })

    test("insert", async () => {
        await usersModel.add({ username: "new_user2", name: "New User2", 
                            email: "new_user2@gmail.com", phone_number: 4324324324, 
                            password: "password" })
        const users = await db("users").select()
        expect(users.length).toEqual(4)
    })

    test("findById", async() => {
        const res = await usersModel.findById(1)
        expect(res.phone_number).toBe(1234567890)
    })

    test("findById", async() => {
        const res = await usersModel.findById(2)
        expect(res.email).toBe("anna_maria_superkind@gmail.com")
    })

    test("findById", async() => {
        const res = await usersModel.findById(3)
        expect(res.name).toMatch(/johny helper/i)
    })

    test("create new user", async () => {
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

    test("login", async () => {
        const res = await supertest(server)
            .post("/api/users/login")
            .send({ username: "johny", password: "Just_Password"})        
        // console.log(res.body)
        expect(res.status).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.message).toBe("Welcome johny!")
    })

})