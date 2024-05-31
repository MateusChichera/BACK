const SalasModel = require('../Model/entidades/Salasmodels');

class SalasController{

    async Obter(req,res){
        try{
            const sala = await SalasModel.ObterTodos();
            return res.status(200).json(sala);
        }catch(error){
            return res.status(500).json({message:"Erro ao obter salas", error: error.message});
        }
    }

    async Inserir(req,res){
        try{
                const sala = new SalasModel(req.body);
                const salaInserida = await SalasModel.Inserir(sala);
                return res.stauts(200).json(salaInserida);

        }catch(error){
            return res.status(500).json({message:"Erro ao inserir sala", error:error.message});
        }
    }

    async Atualizar(req,res){
        try{   
            const sala = new SalasModel(req.body);
            const SalaAtualizada = await SalasModel.Atualizar(sala);
             return res.status(200).json(SalaAtualizada);
        }catch(error){

        }
    }

    async Excluir(req,res){
        try{
                const {id} = req.parms;
                const excluir = await SalasModel.Excluir(id);
                return res.stauts(200).json({message:"Sala excluida com sucesso!"})

        }catch(error){
            return res.stauts(500).json({message:"Erro ao excluir sala", error: error.message});

        }

    }


}

module.exports = SalasController;