const produtoModel = require("./models/produtos");

(async () => {
    const data = await buscarProdutos();
    console.log(data);
    process.exit();
})();

async function buscarProdutos() {
  const data = await produtoModel.findOne();
  return data.dataValues;
}
