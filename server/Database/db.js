import mongoose from "mongoose"

const Connection = async (username,password) => {
    const CONNECTION_URL = `mongodb+srv://${username}:${password}@crud-app.tn7qqp2.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to MongoDB Successfully");
    } catch (err) {
        console.log(err);
    }
}

export default Connection;