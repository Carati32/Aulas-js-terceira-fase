// src/routes/usuarios.js
const express = require('express');

const router = express.Router();

const db = require('../config/db');

// GET todos usuários
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nome FROM usuarios');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ erro: 'Erro ao buscar usuários' });
    }
});
// POST novo usuário
router.post('/', async (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) return res.status(400).json({ erro: 'Nome e email obrigatórios' });

    try {
        const [result] = await db.query('INSERT INTO usuarios (nome, email, datahora_cadastro, datahora_atualizado) VALUES(?, ?, NOW(), NOW())', [nome, email]);
        res.status(201).json({mensagem: 'Usuário cadastrado!', id: result.insertId
        });
    
} catch (err) {
    console.error(err);
    res.status(500).json({ erro: 'Erro ao cadastrar usuário' });
    }
   });
   module.exports = router;
