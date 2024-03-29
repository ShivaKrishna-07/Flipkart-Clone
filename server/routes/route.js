import express from 'express'
import { userSignup, userLogin } from '../controllers/user-controller.js';
import { getProductbyId, getProducts } from '../controllers/product-controller.js';
import { addPaymentGateway } from '../controllers/payment-controller.js';

const router = express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductbyId);

router.post('/payment', addPaymentGateway );

export default router;