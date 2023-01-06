const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const {MONGODB_CNN, MONGODB_CNN_TEST, NODE_ENV} = process.env
const connectionString = NODE_ENV === 'test'
        ?MONGODB_CNN_TEST
        :MONGODB_CNN

        
const dbConnection = async() => {
    
    try {
        await mongoose.connect(connectionString, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
           
        });
        
        console.log('Database online');

    } catch ( error ) {
        console.log(error);
        throw new Error('Error starting database');
    }
}

module.exports ={
    dbConnection
}