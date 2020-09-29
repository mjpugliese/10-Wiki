// const express = require("express");
// const app = express();

// const morgan = require("morgan"); //middleware application logger
// const nunjucks = require("nunjucks"); // para devolver res.render 
// const router = require('./routes');
// const parser = require("body-parser");

// app.use(express.static("./public"));

// app.use(parser.urlencoded({ extended: true }))
// app.use(parser.json())



// // // apuntá nunjucks al directorio conteniendo templates y apagando el cacheo,
// // // configure devuelve una instancia Enviornment que vamos a querer usar para
// // // agregar Markdown después.
// // var env = nunjucks.configure('views', {noCache: true});
// // // hace res.render funcionar con archivos html
// // app.set('view engine', 'html');
// // // cuando res.render funciona con archivos html, haz que use nunjucks para eso.
// // app.engine('html', nunjucks.render);

// app.use('/', router)





// app.listen(3000, ()=> console.log('escuando en puerto'))

const express = require("express");
const app = express();

const morgan = require("morgan");
const nunjucks = require("nunjucks");
const router = require("./routes");
const parser = require("body-parser");
const {db} = require('./models');
const models = require("./models");




app.use(express.static("./public"));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/", router);

// apuntá nunjucks al directorio conteniendo templates y apagando el cacheo,
// configure devuelve una instancia Enviornment que vamos a querer usar para
// agregar Markdown después.
var env = nunjucks.configure("views", { noCache: true });
// hace res.render funcionar con archivos html
app.set("view engine", "html");
// cuando res.render funciona con archivos html, haz que use nunjucks para eso.
app.engine("html", nunjucks.render);

db.sync({force: true}).then(()=>{
    console.log('Conectado a la BD')
    app.listen(3000, () => console.log("Escuchando en puerto 3000"));
}).catch((err)=>console.log(err))

