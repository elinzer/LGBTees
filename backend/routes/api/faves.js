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

// get faves by current user
// router.get('/current', requireAuth, async (req, res) => {
//     const userId = req.user.id;

//     const faves = await Fave.findAll({
//         where: {
//             userId
//         }
//     });

//     return res.json({
//         Faves: faves
//     });
// });


// get tee(s) with most faves?

// add fave
router.post('/', requireAuth, async (req, res) => {
    const { teeId } = req.body;
    const userId = req.user.id;

    const fave = await Fave.create({
        teeId,
        userId
    });

    return res.json({
        fave
    });
});



module.exports = router;
