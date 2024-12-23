import { createSlice } from '@reduxjs/toolkit';
import fiddle_leaf from '../assets/fiddle-leaf.jpg';
import snake_plant from '../assets/snake-plant.jpg';
import aloe_vara from '../assets/aloe-vera.jpg';
import cactus from '../assets/cactus.jpg';
import spider_plant from '../assets/spider-plant.jpg';
import photos_plant from '../assets/pothos.avif'

const initialState = {
  products: [
    { id: 1, name: "Fiddle Leaf Fig", price: 25, category: "Indoor", thumbnail: fiddle_leaf },
    { id: 2, name: "Snake Plant", price: 30, category: "Indoor", thumbnail: snake_plant },
    { id: 3, name: "Aloe Vera", price: 15, category: "Succulent", thumbnail: aloe_vara},
    { id: 4, name: "Cactus", price: 20, category: "Succulent", thumbnail:cactus },
    { id: 5, name: "Spider Plant", price: 18, category: "Indoor", thumbnail: spider_plant},
    { id: 6, name: "Pothos", price: 22, category: "Indoor", thumbnail: photos_plant },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;


