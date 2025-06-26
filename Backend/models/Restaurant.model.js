import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    deliveryTime: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
    },
    // cusines: {
    //     type: [String],
    //     required: true
    // },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5

    }

});

const RestaurantModel = mongoose.model("Restaurant", restaurantSchema);
export default RestaurantModel;