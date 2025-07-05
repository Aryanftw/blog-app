import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import router from "./routes/blogs.route.js"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config()
const port = process.env.PORT || 3000;

app.use('/api/blog',router)

connectDB().then(
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
).catch((error) => {
    console.log("Error in index.js file ",error.message)
})


