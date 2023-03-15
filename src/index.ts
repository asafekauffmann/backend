import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

app.use(express.json())

routes(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('App started')
})
