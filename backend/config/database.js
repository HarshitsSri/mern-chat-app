import mongoose from "mongoose";

const connectiondb = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log(`Database is connected successfully`)
    })
    .catch((error)=>{
        console.log(`The error is in mongo connect and error message is `,error)
    })
}

export default connectiondb