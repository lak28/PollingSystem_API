//controller file to have functions to control options

const Questions = require("../models/question");
const Options = require("../models/option");
//function to add vote to option
module.exports.addVote = function (req, res) {
  Options.findById({ _id: req.params.id }, function (err, option) {
    if (err) {
      return res.json(500, {
        message: "Error in finding message",
        data: err,
      });
    }

    if (option) {
      const currentvote = option.votes + 1;
      console.log("currentvote", option.votes);
      Options.updateOne(
        { _id: req.params.id },
        { votes: currentvote },
        function (err, updatedVotes) {
          if (err) {
            return res.json(500, {
              message: "Votes not updated",
              data: err,
            });
          }
          return res.json(200, {
            message: "Option votes updated",
          });
        }
      );
      option.save();
    }
  });
};
//for deleting an option
module.exports.deleteOption = function (req, res) {
 
    var option = Options.findById({ _id: req.params.id }, function (err, option) {
    if (err) {
      return res.json(500, {
        message: "option not found",
        data: err,
      });
    }
    if(option.votes>0){
        // Option Can't Deleted due to its votes
        return res.status(200).json({
            message : "Option Can't Deleted due to its votes :( "
        });
    }

    Options.findByIdAndDelete(
      { _id: req.params.id },
      function (err, deletedOption) {
        if (err) {
          return res.json(500, {
            message: "Option Cannot be deleted",
            message: data,
          });
        }

        return res.json(200, {
          message: "Option deleted Successfully",
          
        });
      }
    );
  });
};
