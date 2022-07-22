const {faker} = require('@faker-js/faker');

const express = require("express");

const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const createUser = () => {
    const newUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        id: faker.datatype.uuid()
    };
    return newUser
}

const newFakeUser = createUser();
console.log(newFakeUser);



app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json({
        "First name" : newFakeUser.firstName,
        "Last name" : newFakeUser.lastName,
        "Email" : newFakeUser.email,
        "Password" : newFakeUser.password,
        "Phone number" : newFakeUser.phone,
        "ID" : newFakeUser.id
    })})

const createCompany = () => {
    const newCompany = {
        companyName: faker.company.companyName(),
        address: faker.address.buildingNumber(),
        street: faker.address.street(),
        city : faker.address.city(),
        state : faker.address.state(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country()
    }
}

class Company {
    constructor() {
            this.companyName = faker.company.companyName(),
            this.address = faker.address.buildingNumber(),
            this.street = faker.address.street(),
            this.city = faker.address.city(),
            this.state = faker.address.state(),
            this.zipCode = faker.address.zipCode(),
            this.country = faker.address.country()
    }
}

const newFakeCompany = createCompany();
console.log(newFakeCompany)

app.get("/api/companies/new", (req, res) => {
    res.json(
        new Company
    )
})
console.log(faker.company.companyName())
console.log(faker.address.buildingNumber())
console.log(faker.address.street())
console.log(faker.address.city())
console.log(faker.address.state())
console.log(faker.address.zipCode())
console.log(faker.address.country())



app.listen(port, () => console.log(`Running on port ${port}!!`));