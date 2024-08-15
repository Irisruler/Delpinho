const express = require('express')
const router = express.Router()

const {
    turnGetter,
} = require('../controllers/getTurn');

router.route('/').get(turnGetter);

module.exports = router;