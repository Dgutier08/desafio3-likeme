const { Pool } = require ('pg')//conectamos a la base de datos

const pool = new Pool ({
    host:'localhost',
    user:'postgres',
    password:'da',
    database:'likeme',
    allowExitOnIdle: true //cierre automatico de conexiones
})

const obtenerPosts = async () => {
    const result = await pool.query("SELECT * from posts")
    console.log(result)
}

//getDate ()


//registramos los likes

const agregarLike = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts values  (DEFAULT, $1, $2, $3)"
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta,values)
    //console.log ("Like agregado")
}

module.exports = { obtenerPosts, agregarLike };