const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
    const DB = process.env.DB;
    try {
        const conn = await mongoose.connect(DB);
        const host = conn.connection.host;
        console.log(`MongoDB Connected with host ${host}`.bgGreen.white);
    } catch (error) {
        console.log(`Error: ${error.message}`.bgRed.white);
    }
};

module.exports = connectDB;