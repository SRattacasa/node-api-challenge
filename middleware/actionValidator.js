const actions = require("../data/helpers/actionModel")
const projects = require("../data/helpers/projectModel")

function validateActionID() {
    return (req, res, next) => { 
        actions.get(req.params.id)
      .then(action => { 
        if (action) 
        {
          req.action = action
          next()
        } else { 
          res.status(400).json({ message: "invalid action id, please correct and try again" })
        }
      })
      .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
    }
  } 

//   function validProject() {
//     return (req, res, next) => { 
//       projects.get(req.body.project_id)
//       .then(project => { 
//         if (project) 
//         {
//           req.project = project
//           next()
//         } else { 
//           res.status(400).json({ message: "invalid project id. please use a proper project id to add your action" })
//         }
//       })
//       .catch(err => { 
//         res.status(500).json({
//           message: "There was an error because we are learning how to write APIs"
//         })
//       })
//     }
//   } 



module.exports = validateActionID()