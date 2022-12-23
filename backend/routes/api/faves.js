const express = require('express');
const { Fave } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


// get faves by user
router.get('/', requireAuth, async (req, res) => {

    const { userId } = req.body;

    const faves = await Fave.findAll(
        { where: { userId: userId } }
        );
        res.json({
            'Faves': faves
        })
    });


// get tee(s) with most faves?

module.exports = router;
