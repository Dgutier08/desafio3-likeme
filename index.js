const express = require ('express')
const app = express ();
const { obtenerPosts, agregarLike } = require ('./posts')

const cors = require('cors');
app.use(cors());

app.use(express.static("public")); //midelware consulta
app.use(express.json()); //midelware public

app.get("/posts", (req, res)  => {
try {
    res.sendFile();
    } catch (error){
        res.json({mesasge:"No se encuentra el recurso"})
    }
})

app.get("/posts", async (req, res) => {
    try {
      const getPosts = await obtenerPosts();
      res.json(getPosts);
    } catch (error) {
      console.log(error);
    }
  });

 app.post ("/posts",async (req, res)=> {
    try {
        const {titulo, url, descricion} = req.body
        await agregarLike(titulo, url, descricion)
        res.send("Post creado")
    }catch (error){
        console.log(error)
    }
 } ) 

 app.listen (3000,console.log ("El servidor esta escuchando en el puerto 3000 "))

