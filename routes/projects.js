const router = require('express').Router();
const projectsCtrl = require('../controllers/projects')

// Public Routes
router.get('/project/:id', projectsCtrl.projectDetails);
router.get('/:id', projectsCtrl.userProjectIndex);


// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, projectsCtrl.create);
router.delete('/:id', checkAuth, projectsCtrl.delete);
router.put('/:id', checkAuth, projectsCtrl.update);
router.put('/image/:id', checkAuth, projectsCtrl.addImage);
router.put('/supply/:id', checkAuth, projectsCtrl.addSupply);
router.put('/remove/supply/:id', checkAuth, projectsCtrl.removeSupply);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;