const express = require('express');
const { Fave } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const router = express.Router();


// get all faves
router.get('/', requireAuth, async (req, res) => {

    const faves = await Fave.findAll();

    return res.json({
        Faves: faves
    });

});

// get faves by user id


// get tee(s) with most faves?

module.exports = router;
