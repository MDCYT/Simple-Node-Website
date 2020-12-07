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

router.get('/bird', async (req, res) => {

    let bird = await utils.bird()
 
    res.render('bird.html', { image: bird })
});

router.get('/koala', async (req, res) => {

    let koala = await utils.koala()
 
    res.render('koala.html', { image: koala })
});

router.get('/redpanda', async (req, res) => {

    let redpanda = await utils.redpanda()
 
    res.render('redpanda.html', { image: redpanda })
});

router.get('/binary', async (req, res) => {

    let redpanda = await utils.redpanda()
 
    res.render('binary.html', { image: redpanda })
});

router.get('/binary/convert', async (req, res) => {

    const texto = req.query.text.replace("+", " ")

    const tipo = req.query.type

    if (tipo === "Texto a Binario") {
  
        function convertir(text) {
            var length = text.length,
                output = [];
            for (var i = 0; i < length; i++) {
                var bin = text[i].charCodeAt().toString(2);
                output.push(Array(8 - bin.length + 1).join("0") + bin);
            }
            return output.join(" ");
        
        }

        var resultado = convertir(texto)

        var input = "Texto Original"

        var output = "Texto Convertido a Binario"

    } else
        if (tipo === "Binario a Texto") {
            var ABC = {
                toAscii: function (bin) {
                    return bin.replace(/\s*[01]{8}\s*/g, function (bin) {
                        return String.fromCharCode(parseInt(bin, 2))
                    })
                }
            };

            var resultado = ABC.toAscii(texto)

            var input = "Binario Original"

            var output = "Texto Convertido del Binario"
        }

    res.render('convertbinary.html', { binario: resultado, texto: texto, entrada: input, salida: output })
});

module.exports= router