import { Router } from 'express';
import { getAllRestaurants,createRestaurant } from '../controllers/Restaurant.controller.js';

const router = Router();





router.get('/', getAllRestaurants);
router.post('/', createRestaurant);

export default router;