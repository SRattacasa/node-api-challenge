const express = require("express")
const projects = require("../data/helpers/projectModel")
const validate = require("../middleware/projectValidator")

const router = express.Router();

router.get('/',  (req, res) => { 
    projects.get(req.params.id)
    .then(projectList => {
        res.status(200).json(projectList)
    })
    .catch(err=> {console.log(err)})
})

router.get('/:id',  (req, res) => { 
    projects.get(req.params.id)
    .then(projectList => {
        res.status(200).json(projectList)
    })
    .catch(err=> {console.log(err)})
})

router.put("/:id", validate, (req, res) => {
    projects.update(req.params.id, req.body)
    .then(updates => { 
        res.status(200).json(updates)
    })
    .catch(err=> {console.log(err)})
})

router.post("/", (req, res) => {
    projects.insert({name: req.body.name, description: req.body.description})
    .then(bananaword => {
        res.status(201).json(req.body)
    })
    .catch(err=> {console.log(err)})
})

router.delete("/:id", validate, (req, res) => {
    projects.remove(req.params.id)
    .then(removed => { 
        res.status(200).json({message: "Deleted"})
    })
    .catch(err=> {console.log(err)})
})

module.exports = router;
