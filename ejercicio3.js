const express= require("express");
const app = express();

app.use(express.json());
let biblioteca=[];

app.post("/biblioteca", (req, res)=>{
    const newLibro={
        titulo: "Harry Potter",
        autor: "J.K. Rowlling",
        ISBN: biblioteca.length + 1,
        precio: 34.72,
}});

app.get("/biblioteca", (req, res)=>{
    res.json(biblioteca);
});

app.put("/biblioteca/:ISBN", (req, res)=>{
    const libro= biblioteca.find((i)=> i.ISBN === parseInt(req.params.ISBN));
    if(!libro) return res.status(404).send("El libro no fue encontrado");
    libro.titulo= "Harry Potter 1";
    res.json(libro);
});

app.get("/biblioteca/:ISBN", (req,res)=>{
    const.libroIndez = biblioteca.findIndex((i)=>i.ISBN===parseInt(req.params.ISBN));
    if(itemIndex===-1) return res.status(404).setDefaultEncoding("El item no fue encontrado");
    const deleteLibro= biblioteca.splice(libroItem, 1);
    res.json(deleteLibro[0]);
});