// import request from 'supertest'
// import { app } from '@/app'
// import { afterAll, beforeAll, describe, expect, it } from 'vitest'
// import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'
// import { prisma } from '@/lib/prisma'

// describe('Create Check-in (e2e)', () => {
//   beforeAll(async () => {
//     await app.ready()
//   })

//   afterAll(async () => {
//     await app.close()
//   })

//   it('Should be able to create a check-in', async () => {
//     const { token } = await createAndAuthenticateUser(app)

//     const gym = await prisma.gym.create({
//       data: {
//         title: 'JavaScript Gym',
//         latitude: -22.8949505,
//         longitude: -43.1260443,
//       },
//     })

//     const response = await request(app.server)
//       .post(`/gyms/${gym.id}/check-ins`)
//       .set('Authorization', `Bearer ${token}`)
//       .send({
//         latitude: -22.8949505,
//         longitude: -43.1260443,
//       })

//     expect(response.statusCode).toEqual(201)
//   })
// })
