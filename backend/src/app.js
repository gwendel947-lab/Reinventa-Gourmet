import express from 'express'
import cors from 'cors'

import userRoutes from './routes/user.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  return res.json({
    message: 'API Reinventa Gourmet funcionando!'
  })
})

export default app