const mongoose = require("mongoose");

const connection = async() => {

    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect("mongodb://0.0.0.0:27017/mi_redsocial");

        console.log("Conectado correctamente a bd: mi_redsocial");

    } catch(error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos !!");
    }

}

module.exports = connection;
