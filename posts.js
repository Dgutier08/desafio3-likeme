const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'da',
  database: 'likeme',
  allowExitOnIdle: true  
});

const obtenerPots = async() => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const getPost = async(id) => {
  const consulta = "SELECT FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
  const [registro] = result.rows;
}

const crearPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3)";
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
};

const agregarLike = async (id) => {
  const consulta = 'UPDATE posts SET likes = (case when likes IS NULL then 1 else likes + 1 end) WHERE id = $1;'
  const values = [id];
  const { rowCount } = await pool.query(consulta, values)
    if (rowCount === 0) {
        throw { code: 404, message: `No se consiguió ningún viaje con el id ${id}` }
    }
};

const deletePost = async(id) => {
  const consulta = 'DELETE FROM posts WHERE id = $1'
  const values = [id];
  const result = await pool.query(consulta, values);
};

module.exports = { obtenerPots, crearPost, agregarLike, deletePost, getPost };