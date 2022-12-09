const express = require('express');
const {Tee} = require('../../db/models');

const router = express.Router();

//get all tees
router.get('/', async (req, res) => {
    const tees = await Tee.findAll();
    res.json({
        'Tees': tees
    })
});

//get one tee
router.get('/:id', async (req, res) => {
    const tee = await Tee.findByPk(req.params.id);
    res.json({
        'Tee': tee
    })
});

//get tees by current user
//create a tee
//edit a tee
//delete a tee


module.exports = router;
