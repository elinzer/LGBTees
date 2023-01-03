const express = require('express');
const { Tee } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

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

//create a tee
router.post('/', requireAuth, async (req, res) => {
    const { name, price, imageUrl, url, brand, userId } = req.body;
    const tee = await Tee.create({ name, price, imageUrl, url, brand, userId });
    res.json({
        'Tee': tee
    })
}

)
//edit a tee
router.put('/:id', requireAuth, async (req, res) => {
    const { name, price, imageUrl, url, brand, userId } = req.body;

    const tee = await Tee.findByPk(req.params.id);
    tee.name = name;
    tee.price = price;
    tee.imageUrl = imageUrl;
    tee.url = url;
    tee.brand = brand;
    await tee.save();
    res.json({
        'Tee': tee
    })
}
)

//delete a tee
router.delete('/:id', requireAuth, async (req, res) => {
    const tee = await Tee.findByPk(req.params.id);
    await tee.destroy();
    res.json({
        'Tee': tee
    })
})



module.exports = router;
