const produtoModel = require("./models/produtos");
const { createClient } = require("redis");
const client = createClient();
client.on("error", function (err) {
  console.log("Error " + err);
});

(async () => {
    await client.connect();
    console.time("tempo");
    for (let index = 0; index < 1000; index++) {
      await buscarProdutos();
      //await buscarProdutosRedis();
    }
    console.timeEnd("tempo");
    //console.log(data);
    process.exit();
})();

async function buscarProdutos() {
  const data = await produtoModel.findOne();
  return data.dataValues;
}

async function buscarProdutosRedis() {
  let produto = await client.get('produto');
  if (!produto) {
    const data = await produtoModel.findOne();
    produto = JSON.stringify(data);
    await client.set('produto', produto,{EX: 20});
  }
  return JSON.parse(produto);
}
