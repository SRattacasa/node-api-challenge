const actions = require("../data/helpers/actionModel")

function validateActionID() {
    return (req, res, next) => { 
        actions.get(req.params.id)
      .then(action => { 
        if (action) 
        {
          req.action = action
          next()
        } else { 
          res.status(400).json({ message: "invalid action id" })
        }
      })
      .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
    }
  } 

module.exports = validateActionID()