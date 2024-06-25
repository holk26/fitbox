import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/v1/userRoutes.js'
import profileRoutes from './routes/v1/profileRoutes.js'
import classRoutes from './routes/v1/classRoutes.js'
import attendanceRoutes from './routes/v1/attendanceRoutes.js'
import membershipRoutes from './routes/v1/membershipRoutes.js'
import skillRoutes from './routes/v1/skillRoutes.js'
import subscriptionRoutes from './routes/v1/subscriptionRoutes.js'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

dotenv.config()

const app = express()

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Fitness Gym API',
      description: 'API para gestionar un gimnasio y sus usuarios',
      contact: {
        name: 'Tu Nombre',
        email: 'tuemail@example.com'
      },
      servers: ['http://localhost:4000']
    }
  },
  apis: ['./routes/v1/*.js'] // Rutas de tus archivos de rutas
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/users', userRoutes)
app.use('/profiles', profileRoutes)
app.use('/classes', classRoutes)
app.use('/attendances', attendanceRoutes)
app.use('/memberships', membershipRoutes)
app.use('/skills', skillRoutes)
app.use('/subscriptions', subscriptionRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
