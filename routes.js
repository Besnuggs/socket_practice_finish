const router = require('express').Router();

router.get('/public/views/', (req,res) => {
    res.send('Main Index.')
})

router.get('/public', (req,res) => {
    res.send('Front End Styles and Functionality.')
})


module.exports = router;