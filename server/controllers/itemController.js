const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
    try {
        const items = await Item.find()
        .populate({ path: 'shops', select: 'name' })
        .exec();
        res.json({ items });
        } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};
