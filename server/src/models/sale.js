import mongoose from 'mongoose';

const salesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: String,
    expireDate: String,
    title: String,
    description: String
})

export default mongoose.model('Sales', userSchema)