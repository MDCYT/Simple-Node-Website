//Rutas

const express = require('express')
const router = express.Router();
const utils = require('discord-utilities-js')


router.get('/', (req, res) => {
    res.render('index.html', { title: "Mi Primera Pagina" })
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: "Pagina de Contacto" })
});

router.get('/cat', async (req, res) => {

    let cat = await utils.cat()
 
    res.render('cat.html', { image: cat })
});

router.get('/dog', async (req, res) => {

    let dog = await utils.dog()
 
    res.render('dog.html', { image: dog })
});

router.get('/bear', async (req, res) => {

    let bear = await utils.bear()
 
    res.render('bear.html', { image: bear })
});

router.get('/panda', async (req, res) => {

    let panda = await utils.panda()
 
    res.render('panda.html', { image: panda })
});

router.get('/fox', async (req, res) => {

    let fox = await utils.fox()
 
    res.render('fox.html', { image: fox })
});

module.exports= router