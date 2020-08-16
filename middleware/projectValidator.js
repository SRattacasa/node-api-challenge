const projects = require("../data/helpers/projectModel")

function validateProjectId() {
    return (req, res, next) => { 
      projects.get(req.params.id)
      .then(project => { 
        if (project) 
        {
          req.project = project
          next()
        } else { 
          res.status(400).json({ message: "invalid project id" })
        }
      })
      .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
    }
  } 

module.exports = validateProjectId()