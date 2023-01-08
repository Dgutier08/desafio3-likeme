CREATE DATABASE likeme

\c likeme
\l
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000), descripcion VARCHAR(225), likes INT);
\d

             Listado de relaciones
 Esquema |    Nombre    |   Tipo    |  Due±o
---------+--------------+-----------+----------
 public  | posts        | tabla     | postgres
 public  | posts_id_seq | secuencia | postgres


/*registro en la base de datos
 1			
"piratas"	"https://www.nacionflix.com/__export/1657911362431/sites/debate/img/2022/07/09/actor-casi-gana-johnny-depp-jack-sparrow-piratas-del-caribe.jpg_172596871.jpg"	
3			
4	"homero"	"https://simpsons.fandom.com/es/wiki/Homer_Simpson?file=Homeroybart.jpg"	

*/