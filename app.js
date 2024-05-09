import express from "express";
import connectDb from "./db/db-connect.js";
import router from "./routes/routes.js";
const app = new express();
app.use(express.json());

app.use('/todos',router)


const startServer= async()=>{
    try{
        await connectDb();
        app.listen(5500, () => {
            console.log("Connected to the server");
        });
    }
    catch(error){
        console.error('Error connecting to the database:', error);
    }
}

startServer();