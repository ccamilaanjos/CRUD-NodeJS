(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    await database.sync(); // Cria tabela automaticamente

    // Criar
    const novoProduto = await Produto.create({
        nome: 'Monitor Ultrawide',
        preco: 1689,
        descricao: 'Full HD IPS'
    })
    console.log(novoProduto);

    // Ler
    const produto = await Produto.findByPk(1);
    console.log(produto);

    // Atualizar
    produto.descricao = 'Descrição atualizada'
    await produto.save();

    // Deletar
    await produto.destroy();

    /* await Produto.destroy({where: {
        preco: 159
    
    }})*/

})();