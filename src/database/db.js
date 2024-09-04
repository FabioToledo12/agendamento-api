import mongo from "mongoose";

async function connectDataBase() {
  /* conexao com o banco de dados mongoDB */
  //await mongo.connect("mongodb://localhost:27017/devPerformance");
  // await mongo.connect(
  //   "mongodb://mongo:WJxdEkeKuOazCQglddkYTvnbZFTrKncx@viaduct.proxy.rlwy.net:15425"
  // );
  await mongo.connect(
    // "mongodb+srv://sa:root@devperformance.rnkbply.mongodb.net/?retryWrites=true&w=majority&appName=DEVPERFORMANCE"
    "mongodb+srv://sa:gymsync@gymsync.uoxc3r9.mongodb.net/?retryWrites=true&w=majority&appName=GymSync"
  );
}

export default connectDataBase;
