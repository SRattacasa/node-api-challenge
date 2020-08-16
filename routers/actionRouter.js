const express = require("express")
const actions = require("../data/helpers/actionModel")


const router = express.Router();

router.get('/',  (req, res) => { 
    actions.get(req.params.id)
    .then(actionList => {
        res.status(200).json(actionList)
        console.log(req.params.id)
    })
    .catch(err=> {console.log(err)})
})

router.get('/:id',   (req, res) => { 
    actions.get(req.params.id)
    .then(actionList => {
        res.status(200).json(actionList)
        console.log(req.params.id)
    })
    .catch(err=> {console.log(err)})
})

router.put("/:id",  (req, res) => {
    actions.update(req.params.id, req.body)
    .then(updates => { 
        res.status(200).json(updates)
    })
    .catch(err=> {console.log(err)})
})

router.post("/", (req, res) => {
    actions.insert({project_id: req.body.project_id, description: req.body.description, notes: req.body.notes})
    .then(bananaword => {
        res.status(201).json(req.body)
    })
    .catch(err=> {console.log(err)})
})

router.delete("/:id",  (req, res) => {
    actions.remove(req.params.id)
    .then(removed => { 
        res.status(200).json({message: "Deleted"})
    })
    .catch(err=> {console.log(err)})
})

module.exports = router;
