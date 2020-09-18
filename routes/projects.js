const router = require('express').Router();
const projectsCtrl = require('../controllers/projects')

// Public Routes
router.get('/', projectsCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
// router.post('/', checkAuth, projectsCtrl.create);
// router.delete('/:id', checkAuth, projectsCtrl.delete);
// router.put('/:id', checkAuth, projectsCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;