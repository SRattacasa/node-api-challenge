const express = require("express")
const projects = require("../data/helpers/projectModel")
const validate = require("../middleware/projectValidator")

const router = express.Router();

router.get('/', async (req, res) => { 
    try {
    const projectList = await projects.get()
    res.status(200).json(projectList)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', validate, async (req, res) => { 
    try {
        const projectList = await projects.get(req.params.id)
        res.status(200).json(projectList)
        } catch (err) {
            next(err)
        }
})

router.get("/:id/actions", validate, (req, res) => {
    projects.getProjectActions(req.params.id)
    .then(list => { 
        res.status(200).json(list)
    })
})



router.put("/:id", validate, (req, res) => {
    projects.update(req.params.id, req.body)
    .then(updates => { 
        res.status(200).json(updates)
    })
    .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.post("/", (req, res) => {
    projects.insert({name: req.body.name, description: req.body.description})
    .then(bananaword => {
        res.status(201).json(req.body)
    })
    .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

router.delete("/:id", validate, (req, res) => {
    projects.remove(req.params.id)
    .then(removed => { 
        res.status(200).json({message: "Deleted"})
    })
    .catch(err => { 
        res.status(500).json({
          message: "There was an error because we are learning how to write APIs"
        })
      })
})

module.exports = router;
