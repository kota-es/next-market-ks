import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://saito:akurosuke95s@cluster0.jkro7mp.mongodb.net/?retryWrites=true&w=majority")
    console.log("Success: Connected to MongoDB")
  } catch(err) {
    console.log("Failure: Unconnected to MongoDB")
    throw new Error()
  }
}

export default connectDB