import { Request, Response } from "express";
import database from "../config/database";

async function getUsers(req: Request, res: Response) {
    database.connection.query('SELECT * FROM clients_ecomerce', (err, results) => {
        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                mensage: 'Listagem de usuários realizada com sucesso.',
                data: results
            })
        };
    })
};

async function postUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients_ecomerce(ds_name, nm_cpf, fl_status)VALUES(?,?,?);';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status
    );

    database.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            mensagem: 'Cadastro realizado com sucesso!!!',
            data: results
        })
    });
};

async function deleteUser(req: Request, res: Response) {
    const querySql = 'delete from clients_ecomerce where id_client = ?;';
    const idClient = req.params.id_client;

    database.connection.query(querySql, (idClient), (err, results) => {
        res.json({
            mensagem: 'usuario deletado com sucesso'
        })
    });
};

export default {
    getUsers,
    postUser,
    deleteUser
};