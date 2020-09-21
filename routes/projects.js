const router = require('express').Router();
const projectsCtrl = require('../controllers/projects')

// Public Routes
router.get('/:id', projectsCtrl.projectDetails);


// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, projectsCtrl.create);
router.get('/', checkAuth, projectsCtrl.userProjectIndex);
router.delete('/:id', checkAuth, projectsCtrl.delete);
router.put('/:id', checkAuth, projectsCtrl.update);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;