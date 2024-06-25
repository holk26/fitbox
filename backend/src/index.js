import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/v1/userRoutes.js'
import profileRoutes from './routes/v1/profileRoutes.js'
import classRoutes from './routes/v1/classRoutes.js'
import attendanceRoutes from './routes/v1/attendanceRoutes.js'
import membershipRoutes from './routes/v1/membershipRoutes.js'
import skillRoutes from './routes/v1/skillRoutes.js'
import subscriptionRoutes from './routes/v1/subscriptionRoutes.js'

dotenv.config()

const app = express()

app.use('/users', userRoutes)
app.use('/profiles', profileRoutes)
app.use('/classes', classRoutes)
app.use('/attendances', attendanceRoutes)
app.use('/memberships', membershipRoutes)
app.use('/skills', skillRoutes)
app.use('/subscriptions', subscriptionRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Express server started')
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})
