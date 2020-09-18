const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplySchema = new mongoose.Schema({
  name: String,
  type: String,
  paintType: String,
  size: String,
  color: String,
  brand: String,
  own: Boolean,
  models: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Supply', supplySchema);