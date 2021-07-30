const express = require('express')
const faker = require('faker')
const app = express()
const port = 8000;

app.listen(port, () => {
  console.log("Listening to Port", port);
})

const createUser = () => {
  const newUser = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  return newUser;
}

const company = () => {
  const newCompany = {
    name: faker.company.companyName(),
    address: getAddress()
  }
  return newCompany;
}

const getAddress = () => {
  const address = {
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country()
  }
  return address;
}

app.get("/api/user/new", (req, res) => {
  res.json(createUser())
})

app.get("/api/company/new", (req, res) => {
  res.json(company())
})

app.get("/api/user/company", (req, res) => {
  res.json({user: createUser(), company: company()})
})