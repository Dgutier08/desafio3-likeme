const express =  require('express');
const app = express();


const { obtenerPots, crearPost, agregarLike, deletePost, getPost } = require('./posts');

app.use(express.json()) //parsear consultas
app.use(express.static("public")); //Archivos estaticos



app.get("/", (req, res) => {
  try {
    res.sendFile();
  } catch (error) {
    res.json({ message: "No se encuentra el recurso que estas solicitando" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const getPosts = await obtenerPots();
    res.json(getPosts);
  } catch (error) {
    console.log(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await crearPost(titulo, url, descripcion);
    res.send("Post creado");
  } catch (error) {
    console.log(error);
  }
});

app.put('/posts/like/:id',  async (req, res) => {
  const { id } = req.params;
  try {
    await agregarLike(id);
    res.send('like added');
  } catch (error) {
    res.send(error);
    res.status(500).json({ message: "Servicio no disponible para hacer like " })
  }
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deletePost(id);
    res.send('Post eliminado en exito');
  } catch (error) {
    res.status(500).json({ message: "no se puede eliminar reistro " })
    
  }
});


app.listen(3000, console.log("El servidor esta escuchando en el puerto 3000 "))