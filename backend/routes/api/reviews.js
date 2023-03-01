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
router.post('/', requireAuth, async (req, res) => {
    const { userId, teeId, rating, review } = req.body;
    const newReview = await Review.create({
        userId,
        teeId,
        rating,
        review
    });

    res.json({
        'Review': newReview
    })

});

//update a review
router.put('/:reviewId', requireAuth, async (req, res) => {
    const { userId, teeId, rating, review } = req.body;
    const reviewToUpdate = await Review.findByPk(req.params.reviewId);

    if (reviewToUpdate) {
        await reviewToUpdate.update({
            userId,
            teeId,
            rating,
            review
        });
        res.json({
            'Review': reviewToUpdate
        })
    } else {
        res.json({
            'Error': 'Review not found'
        })
    }
});

//delete a review
router.delete('/:reviewId', requireAuth, async (req, res) => {
    const reviewToDelete = await Review.findByPk(req.params.reviewId);

    if (reviewToDelete) {
        await reviewToDelete.destroy();
        res.json({
            "Message": "Review deleted"
        })
    } else {
        res.json({
            'Error': 'Review not found'
        })
    }
});



module.exports = router;
