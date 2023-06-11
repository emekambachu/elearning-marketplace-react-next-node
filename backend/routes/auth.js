import express from 'express';

const router = express.Router();
router.get('/register', (req, res) => {
    res.send("You hit the server endpoint");
});

module.exports = router;