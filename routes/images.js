const router = require('express').Router();
const imagesCtrl = require('../controllers/images')

// Public Routes
// router.get('/', imagesCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, imagesCtrl.create);
router.get('/', checkAuth, imagesCtrl.indexForUser)
// router.delete('/:id', checkAuth, imagesCtrl.delete);
// router.put('/:id', checkAuth, imagesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;