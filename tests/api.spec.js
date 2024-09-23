// @ts-check
const { test, expect } = require('@playwright/test')

test.setTimeout(6000000)

var user_id

test('Get Users cicd', async ({ request }) => {
  // การทดสอบ API Method Get
  const response = await request.get('https://reqres.in/api/users/2')
  console.log(response)

  // การยืนยันหรือ Assertion
  expect(response.status()).toBe(200)
})

test('Post Users', async ({ request }) => {
  // การทดสอบ API Method Get
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      "name": "sam",
      "job": "homeless"
    }, headers: { "Accept": "application/json" }
  })
  console.log(response)

  // การยืนยันหรือ Assertion
  expect(response.status()).toBe(201)

  var res = await response.json()
  user_id = res.id
})

test('Update Users', async ({ request }) => {
  // การทดสอบ API Method Get
  const response = await request.put('https://reqres.in/api/users/2' + user_id, {
    data: {
      "name": "kongpipop the gay lord",
      "job": "homeless"
    }, headers: { "Accept": "application/json" }
  })
  expect(response.status()).toBe(200)
})

test('Delete Users', async ({ request }) => {
  // การทดสอบ API Method Get
  const response = await request.delete('https://reqres.in/api/users/2' + user_id)
  expect(response.status()).toBe(204)
})

