import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import dotenv from "dotenv";
import connectDB from './config/db.js'
import citizensRoutes from './routes/citizens.js'
import citiesRoutes from './routes/cities.js'
import locationsRoutes from './routes/locations.js'
import groupsRoutes from './routes/groups.js'
import infoRoutes from './routes/info.js'
import { errorHendler, notFound } from './utils/standart.js';


dotenv.config()

connectDB()

const app = express()

if ( process.env.NODE_ENV === 'development' )
{
  app.use(morgan('dev'))
}

app.use( (req, res, next) => {
  console.log(req.originalUrl)
  next()
} )

app.use(cors())



app.use( express.json() )


app.use('/api/citizens', citizensRoutes)
app.use('/api/cities', citiesRoutes)
app.use('/api/locations', locationsRoutes)
app.use('/api/groups', groupsRoutes)
app.use('/api/info', infoRoutes)

// app.use( citizensRoutes)
// app.use( citiesRoutes)
// app.use( locationsRoutes)
// app.use( groupsRoutes)
// app.use(infoRoutes)


const __dirname = path.resolve();

if ( process.env.NODE_ENV === "production" ) {
  app.use(express.static(path.join(__dirname, "project/build")));
  app.get( "*", ( req, res ) => {
    res.sendFile(path.resolve(__dirname, 'project', 'build', 'index.html'))
  });
} else {
  app.get("/", (req, res) => {
    res.send("API running");
  });
}

app.use( notFound )

app.use(errorHendler)


const PORT = process.env.PORT 


app.listen( PORT, () => {
  console.log(`Serever is running on port ${PORT}`)
} )
