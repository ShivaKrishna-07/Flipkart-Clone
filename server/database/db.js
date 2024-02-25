import mongoose from "mongoose";


export const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@ecommerce.qrpgzba.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce`;
    try {
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the Database ", error.message);
    }
}

export default Connection;