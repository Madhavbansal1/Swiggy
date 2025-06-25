import RestaurantModel from "../models/Restaurant.model.js";
export const createRestaurant = async (req, res) => {
    try{
        const newReastaurant = await RestaurantModel.create(req.body);
        return res.status(201).json(newReastaurant);
    }catch(error) {
        console.error("Error creating restaurant:", error);
        return res.status(500).send("Internal Server Error");
    }
}

export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await RestaurantModel.find({});
        return res.status(200).json(restaurants);
    } catch (error) {
        console.error("Error fetching restaurants:", error);
        return res.status(500).send("Internal Server Error");
        
    }
  
}