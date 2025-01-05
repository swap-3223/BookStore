import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    tittle:String,
    image:String
});

const Book = mongoose.model("Book",bookSchema);

export default Book;