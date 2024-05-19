import connect from "../config/connection.js";

//OBJETO VAZIO A SER EXPORTADO PARA OUTROS ARQUIVOS DA APLICAÇÃO
let produto = {}

//IMPORTAÇÃO DA CONEXÃO COM O BD
const con = await connect();

//MOSTRA TODOS OS PRODUTOS CADASTRADOS
produto.all = async function (req, res)
{

    try 
    {
        let produtos = await con.query(`SELECT * FROM produto;`);

        res.send(produtos);
    }
    catch (err)
    {
        console.log("Erro na consulta -> ", err);
    }
}

export {produto}