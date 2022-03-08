const Questions = require("../models/question");
const Options = require("../models/option");
//for creating questions
module.exports.create = function (req, res) {
  Questions.create(
    { title: req.body.title, vote: false },
    function (err, question) {
      if (err) {
        return res.json(500, {
          message: "Question is not created",
          data: err,
        });
      }
      if (question) {
        return res.json(200, {
          message: "Question Created",
          data: question,
        });
      } else {
        return res.json(400, {
          message: "Question not created",
        });
      }
    }
  );
};
//for deleting a question
module.exports.deleteQuestion = function (req, res) {
  console.log(req.params.id);
  Questions.findByIdAndDelete(
    { _id: req.params.id },
    function (err, deletedQuestion) {
      if (err) {
        return res.json(500, {
          message: "Question could not be deleted",
          data: err,
        });
      }

      return res.json(200, {
        message: "Question Deleted Successfully",
      });
    }
  );
  // deleting options of deleted question
  Options.deleteMany({ question: req.params.id }, function (err, deleteOption) {
    if (err) {
      return res.json(500, {
        message: "Could not delete Option",
        data: err,
      });
    }
    return res.json(200, {
      message: "Options are also deleted",
    });
  });
};
//adding option to question


module.exports.addOptions = async function(req,res){
    try {
        var optionText = req.body.text.toLowerCase();
  
        var question = await Questions.findById(req.params.id);
  
        if(!question){
            return res.status(200).json({
                message : "Question Not Found :("
            });
        }
  
        var optionArr = question.option;
        for(let id of optionArr){
            let option = await Options.findById(id);
            if(option.text == optionText){
                return res.status(200).json({
                    message : "Option Already Exists :("
                });
            }
        }
        // time to create a option to question
        var newOption = await Options.create({text : optionText, votes : 0, question : question._id});
        newOption.link = `http://localhost:3000/options/${newOption.id}/add_vote`;
        newOption.save();
  
        
        question.option.push(newOption._id);
        question.save();
  
        res.status(200).json({
            message : "Option Created :) ",
            data: newOption,
        });
  
    } catch (error) {
        return res.status(200).json({
            message : "error occurred at Server :(" + error
        });
    }
  };

module.exports.showAllQuestions = async (req, res) => {
  try {
    // finding all the questions and returning
    let question = await Questions.findById(req.params.id).populate({
      path: "option",
    });

    if (question) {
      return res.status(200).json({
        message: "Here is the questions",
        data: question,
      });
    } else {
      return res.status(400).json({
        message: "Question does not does not exists",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Error from the server ",
      data: err,
    });
  }
};
