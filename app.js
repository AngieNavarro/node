import express from 'express'
import cors from 'cors'
import blogRoutes from './routes/routes_d.js'
import db_export from './database/db.js'

const app=express()

app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db_export.authenticate();
    console.log('conexion exitosa')
} catch (error) {
    console.log('error')
}
/*
app.get('/', (req, res)=>{
    res.send('Hola Mundo Angie')
})
*/

app.listen(8000,()=>{
    console.log('server corriendo in http://localhost:8000/')
})