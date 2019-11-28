const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var contactSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
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

var Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
