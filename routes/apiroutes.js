const router = require('express').Router()
//const db = require('../db/db')

router.get('/notes', (req, res) => {
  // call notes.js use methods to write
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

router.post('/notes', (req, res) => {
// call addnotes
}
);

module.exports = router;