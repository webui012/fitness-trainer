import mongoose from 'mongoose';

const saleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    img: String,
    expireDate: String,
    title: String,
    description: String,
    longDescription: Array
})
export default mongoose.model('Sale', saleSchema)
