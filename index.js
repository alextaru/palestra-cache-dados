const produtoModel = require("./models/produtos");

(() => {
    buscarProdutos();
})();

async function buscarProdutos() {
  const data = await produtoModel.findAll();
  console.log(data);
}
