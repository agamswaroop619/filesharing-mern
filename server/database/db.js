import mongoose from "mongoose";
const DBConnection =async () =>{
    try {
        const DB_URL =`mongodb://atam:agam12345@ac-apdafoa-shard-00-00.rngdg6n.mongodb.net:27017,ac-apdafoa-shard-00-01.rngdg6n.mongodb.net:27017,ac-apdafoa-shard-00-02.rngdg6n.mongodb.net:27017/?ssl=true&replicaSet=atlas-11cqpt-shard-0&authSource=admin&retryWrites=true&w=majority`;
        await mongoose.connect(DB_URL, {useNewUrlParser :true} );
        console.log('Database connected succesfully!');
    } catch (error) {
        console.error('Error while connecting to Database',error.message);
    }
}
export default DBConnection;