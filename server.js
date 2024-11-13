import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

const app = express()


app.use(express.json())
app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)



/*3rotas
Públicas
    cadastrar e login 
    
Privadas
    listar usuarios

    name alificleiton
    password jb7wR2iZKNFZq3eR
    mongodb+srv://alificleiton:jb7wR2iZKNFZq3eR@users.vj1vz.mongodb.net/?retryWrites=true&w=majority&appName=Users

*/


app.listen(3000, () => console.log("Servidor Rodando !!!"))