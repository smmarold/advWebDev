//Set up express
const express = require(`express`);
const app = express();
//Include the file system functions
const fs =require(`fs`);
//Include and set the hbs (handlebars) view engine
const hbs = require(`hbs`)
app.set(`view engine`,`hbs`)
//register the location of partial snippets for the view engine
hbs.registerPartials(__dirname + `/views/partials`,(err)=>{})
//Uses extended url capability
app.use(express.urlencoded({extended:true}));
//add the static asset folder
app.use(express.static(`${__dirname}/public`));
//allow express json functionality
app.use(express.json())

//path to the data folder
const data = `./data`

//Route to the root directory. Displays "Hello World" in browser
app.get(`/`, (req,res)=>{
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/notFound.html`)
})

//Runs the server when npm app.js is run in the terminal

let port = process.env.PORT || 80;
app.listen(port, ()=>{
    console.log(`Server Running at localhost:${port}`)
});

