require('dotenv/config');
const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./model/producto");
const resolvers = require("./model/productoResolv");
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_STRING)
    } catch (err) {
        console.log(err);
    }
}

const app = express();

connectDB();

async function start () {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    const PORT = process.env.PORT || 8080; 

    apolloServer.applyMiddleware({app})

    app.listen(PORT, ()=> console.log(`Servidor escuchando en el puerto ${PORT}`))
}

start();