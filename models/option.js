//Database model of question

const mongoose = require("mongoose");
//schema of options
const optionSchema = new mongoose.Schema(
  {
    
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
    text: {
      type: String,
    },
    votes: {
      type: Number,
    },
    link: {
      type: String,
    },
  },
  {
    timeStamps: true,
  }
);

const Options = mongoose.model("Options", optionSchema);
module.exports = Options;
