const express = require("express")
const actions = require("../data/helpers/actionModel")
const projects = require("../data/helpers/projectModel")
const validateActionID = require("../middleware/actionValidator")



const router = express.Router();

router.get('/',  (req, res) => { 
    actions.get(req.params.id)
    .then(actionList => {
        res.status(200).json(actionList)
        console.log(req.params.id)
    })
    .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.get('/:id',  validateActionID, (req, res) => { 
    actions.get(req.params.id)
    .then(actionList => {
        res.status(200).json(actionList)
    })
     .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.put("/:id", validateActionID, (req, res) => {
    actions.update(req.params.id, req.body)
    .then(updates => { 
        res.status(200).json(updates)
    })
     .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.post("/", validProject(), (req, res) => {
    console.log(req.body.project_id)
    actions.insert(req.body)
    .then(bananaword => {
        res.status(201).json(req.body)
    })
     .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.delete("/:id", validateActionID, (req, res) => {
    actions.remove(req.params.id)
    .then(removed => { 
        res.status(200).json({message: "Deleted"})
    })
     .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})


// couldn't import this one for some reason, but the logic works this way.

function validProject() {
    return (req, res, next) => { 
      projects.get(req.body.project_id)
      .then(project => { 
        if (project) 
        {
          req.project = project
          next()
        } else { 
          res.status(400).json({ message: "invalid project id. please use a proper project id to add your action" })
        }
      })
      .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
    }
  } 

module.exports = router;
