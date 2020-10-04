const router = require('express').Router();
const path = require('path');

//route to serve index.html. '/' points to the root of the server. res.sendFile is used to serve the html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});


//export router
module.exports = router;