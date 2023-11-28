const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  subscribe: {
    type: Boolean,
    default: false,
  },
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
