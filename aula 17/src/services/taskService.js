const express = require('express')

let tasks =[
    {id: 1, title:"Estudar Apis", done: false},
    {id: 2, title: "Praticar Criação de Apis", done: true}
]

// Regras de negocio:
// o título é obrigatório
// Não pode haver título duplicado
// So é possível concluir uma tarefa se ela existir
// Não é permitido atualizar ou excluir uma tarefa inexistente
// Não é permitido excluir uma tarefa concluída

const getAll = () => tasks;

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) throw { status: 404, message: "Tarefa não encontrada" }
    return task
}

module.exports = {getAll, getById}