const express = require("express");//importando o express  
const bcrypt = require("bcrypt"); //importando um modulo do bcrypt
const Usuario = require("../models/Usuario.js") //importando o model Usuario

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const {email, senha} = req.body;

        // select email,senha from usuario where email = 'tal';
        const usuario = await Usuario.findOne({where: {email}})

        if(!usuario){
            return res.status(401).json({messagem: "Opa! Usuario incorreto."})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha); // retorna true ou false

        if(senhaValida){
            return res.status(200).json({messagem: "Login realizado"})
        } else{
            return res.status(401).json({messagem: "Opa! Usuario incorreto."})
        }

    } catch (error) {
        res.status(400),json({message: "Ocorreu um erro, tente novamente mais tarde."})
        console.log("Erro: ", error);
    }
});

module.exports = router;