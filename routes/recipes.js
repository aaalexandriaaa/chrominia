const router = require('express').Router();
const recipesCtrl = require('../controllers/recipes')

// Public Routes
router.get('/', recipesCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
// router.post('/', checkAuth, recipesCtrl.create);
// router.delete('/:id', checkAuth, recipesCtrl.delete);
// router.put('/:id', checkAuth, recipesCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;