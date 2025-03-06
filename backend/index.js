import mongoose from 'mongoose';
import express from 'express';

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,  
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 

 