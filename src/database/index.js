// objeto para guardar a conexão do banco dados
let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao tentar uma conexão com banco dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("✔ - Banco de dados conectado");
  } catch (error) {
    console.log(error);
    console.error("Erro ao tentar se conectar ao banco de dados 🚨");
  }
}

// db.hasConnection = hasConnection
Object.assign(db, {
  hasConnection,
});

module.exports = db;
