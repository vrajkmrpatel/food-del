import mongoose from "mongoose";

export const connectDB = async() => {
      await mongoose.connect(`mongodb+srv://31vrajpatel:zm26f80DQ4aAB7Gx@cluster0.8bffzo0.mongodb.net/food-del`).then(()=> console.log('DB Connected'))
}

// zm26f80DQ4aAB7Gx