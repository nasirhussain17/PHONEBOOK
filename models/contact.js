const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

var Contacts = mongoose.model("Contact", contactSchema);

module.exports = Contacts;
