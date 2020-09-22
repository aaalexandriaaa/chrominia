const router = require('express').Router();
const suppliesCtrl = require('../controllers/supplies')

// Public Routes
// router.get('/', suppliesCtrl.index);


// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, suppliesCtrl.create);
router.post('/wishlist/', checkAuth, suppliesCtrl.addWishList);
router.get('/', checkAuth, suppliesCtrl.indexForUser)
router.get('/wishlist/', checkAuth, suppliesCtrl.getWishList)
router.delete('/:id', checkAuth, suppliesCtrl.delete);
router.put('/wishlist/:id', checkAuth, suppliesCtrl.wishList);
router.put('/own/:id', checkAuth, suppliesCtrl.ownSupply);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;