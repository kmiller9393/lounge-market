import mongoose from 'mongoose';

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    return console.log('Using existing db connection');
  }

  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('db connected');
  connection.isConnected = db.connections[0].readyState;
};

export default connectDb;
