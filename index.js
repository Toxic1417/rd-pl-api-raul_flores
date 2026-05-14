import express from 'express'
import cors from 'cors'
import router from './src/players/playerRouter.js'

const app =express()
const PORT = 3000 || 3001 || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    return res.send("API REST Radio Deportes")
} )

app.use('/api', router)

app.listen(PORT, () => {
    let url = `http://localhost:${PORT}`
    console.log(`Servidor Corriendo en ${url}`)
})