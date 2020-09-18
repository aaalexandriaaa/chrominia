const router = require('express').Router();
const notesCtrl = require('../controllers/notes')

// Public Routes
router.get('/', notesCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
// router.post('/', checkAuth, notesCtrl.create);
// router.delete('/:id', checkAuth, notesCtrl.delete);
// router.put('/:id', checkAuth, notesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;