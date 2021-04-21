import express from 'express'
import cors from 'cors'
import  path from 'path' 
import connectDB from './config/db.js'
import citizensRoutes from './routes/citizens.js'
import citiesRoutes from './routes/cities.js'
import locationsRoutes from './routes/locations.js'
import groupsRoutes from './routes/groups.js'
import infoRoutes from './routes/info.js'



const app = express()
app.use(cors())
connectDB()

const PORT = 5000

app.use( express.json() )
app.use('/api/citizens', citizensRoutes)
app.use('/api/cities', citiesRoutes)
app.use('/api/locations', locationsRoutes)
app.use('/api/groups', groupsRoutes)
app.use('/api/info', infoRoutes)
app.get('/', (req, res) => res.send('Hello from homepage'))

app.listen( PORT, () => {
  console.log(`Serever is running on port ${PORT}`)
} )

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/project/build")));
  app.get( "*", ( req, res ) => {
    res.sendFile(path.resolve(__dirname, 'project', 'build', 'index.html'))
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}