import mongoose from "mongoose";
const DBConnection =() =>{
    try {
        mongoose.connect(DB_URL, {useNewUrlParser :true} );
    } catch (error) {
        console.error('Error while connecting to Database',error.message);
    }
}