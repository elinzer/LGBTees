const express = require('express');
const { Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

//get reviews by tee id
router.get('/:teeId', async (req, res) => {
    const reviews = await Review.findAll({
        where: {
            teeId: req.params.teeId
        }
    });

    res.json({
        'Reviews': reviews
    })
});

//create a review
//update a review
//delete a review






module.exports = router;
