const express = require('express');
const { Fave } = require('../../db/models');
const { Tee } = require('../../db/models');
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
router.get('/:userId', requireAuth, async (req, res) => {
    const userId = req.user.id;
    
    const faves = await Tee.findAll({
            include: {
                model: Fave,
                where: {
                    userId
                }
            }
        });

    return res.json({
        Faves: faves
    });
});


// get tee(s) with most faves?

// add fave
router.post('/', requireAuth, async (req, res) => {
    const { teeId } = req.body;
    const userId = req.user.id;

    const fave = await Fave.create({
        teeId,
        userId
    });

    const tee = await Tee.findByPk(teeId);

    return res.json({
        tee
    });
});

// delete fave
router.delete('/', requireAuth, async (req, res) => {

    const { teeId, userId } = req.body;

    await Fave.destroy({
        where: {
            teeId,
            userId
        }
    });


    return res.json({
        message: 'Fave(s) deleted'
    });
});



module.exports = router;
