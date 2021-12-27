import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      name: 'Juice - Clamato, 341 Ml',
      price: 6.5,
      stock: 27,
    },
    {
      id: 2,
      name: 'Tomatoes - Cherry, Yellow',
      price: 8.4,
      stock: 43,
    },
    {
      id: 3,
      name: 'Lettuce - Lolla Rosa',
      price: 1.17,
      stock: 13,
    },
    {
      id: 4,
      name: 'Wine - Red, Cooking',
      price: 2.25,
      stock: 18,
    },
    {
      id: 5,
      name: 'Ham - Cooked Italian',
      price: 5.32,
      stock: 13,
    },
    {
      id: 6,
      name: 'Coffee Caramel Biscotti',
      price: 2.5,
      stock: 2,
    },
    {
      id: 7,
      name: 'Shrimp - 150 - 250',
      price: 6.69,
      stock: 58,
    },
    {
      id: 8,
      name: 'Pork - European Side Bacon',
      price: 3.16,
      stock: 71,
    },
    {
      id: 9,
      name: 'Cheese - Oka',
      price: 2.11,
      stock: 88,
    },
    {
      id: 10,
      name: 'Veal - Round, Eye Of',
      price: 13.94,
      stock: 55,
    },
    {
      id: 11,
      name: 'Mushroom - Porcini, Dry',
      price: 2.23,
      stock: 41,
    },
    {
      id: 12,
      name: 'Cod - Salted, Boneless',
      price: 9.7,
      stock: 94,
    },
    {
      id: 13,
      name: 'Wine - Marlbourough Sauv Blanc',
      price: 13.4,
      stock: 81,
    },
    {
      id: 14,
      name: 'Kiwano',
      price: 13.41,
      stock: 10,
    },
    {
      id: 15,
      name: 'Doilies - 7, Paper',
      price: 13.51,
      stock: 27,
    },
    {
      id: 16,
      name: 'Lemonade - Black Cherry, 591 Ml',
      price: 6.86,
      stock: 68,
    },
    {
      id: 17,
      name: 'Bread - Triangle White',
      price: 2.28,
      stock: 58,
    },
    {
      id: 18,
      name: 'Juice - Cranberry, 341 Ml',
      price: 4.91,
      stock: 55,
    },
    {
      id: 19,
      name: 'Club Soda - Schweppes, 355 Ml',
      price: 14.79,
      stock: 70,
    },
    {
      id: 20,
      name: 'Stock - Fish',
      price: 4.88,
      stock: 59,
    },
    {
      id: 21,
      name: 'Danishes - Mini Raspberry',
      price: 7.63,
      stock: 96,
    },
    {
      id: 22,
      name: 'Cocoa Powder - Dutched',
      price: 12.48,
      stock: 82,
    },
    {
      id: 23,
      name: 'Pasta - Ravioli',
      price: 1.84,
      stock: 73,
    },
    {
      id: 24,
      name: 'Table Cloth 54x72 Colour',
      price: 4.5,
      stock: 1,
    },
    {
      id: 25,
      name: 'Skirt - 29 Foot',
      price: 7.66,
      stock: 13,
    },
    {
      id: 26,
      name: 'Sauce - Hp',
      price: 9.88,
      stock: 78,
    },
    {
      id: 27,
      name: 'Cheese - Gouda',
      price: 12.27,
      stock: 61,
    },
    {
      id: 28,
      name: 'Table Cloth 144x90 White',
      price: 8.41,
      stock: 31,
    },
    {
      id: 29,
      name: 'Tomatoes - Heirloom',
      price: 9.19,
      stock: 65,
    },
    {
      id: 30,
      name: 'Tuna - Loin',
      price: 2.88,
      stock: 63,
    },
    {
      id: 31,
      name: 'Gherkin - Sour',
      price: 2.68,
      stock: 2,
    },
    {
      id: 32,
      name: 'Crackers - Water',
      price: 5.0,
      stock: 44,
    },
    {
      id: 33,
      name: 'Wine - White Cab Sauv.on',
      price: 3.98,
      stock: 98,
    },
    {
      id: 34,
      name: 'Shrimp - Black Tiger 8 - 12',
      price: 5.48,
      stock: 87,
    },
    {
      id: 35,
      name: 'Wine - Trimbach Pinot Blanc',
      price: 2.26,
      stock: 100,
    },
    {
      id: 36,
      name: 'Celery Root',
      price: 4.05,
      stock: 36,
    },
    {
      id: 37,
      name: 'Bacardi Raspberry',
      price: 7.86,
      stock: 95,
    },
    {
      id: 38,
      name: 'Devonshire Cream',
      price: 8.65,
      stock: 64,
    },
    {
      id: 39,
      name: 'Crab Brie In Phyllo',
      price: 1.31,
      stock: 8,
    },
    {
      id: 40,
      name: 'Turnip - White',
      price: 7.28,
      stock: 80,
    },
    {
      id: 41,
      name: 'Thyme - Dried',
      price: 1.03,
      stock: 17,
    },
    {
      id: 42,
      name: 'Oven Mitts - 15 Inch',
      price: 11.08,
      stock: 45,
    },
    {
      id: 43,
      name: 'Cheese - Taleggio D.o.p.',
      price: 11.1,
      stock: 5,
    },
    {
      id: 44,
      name: 'Energy Drink Red Bull',
      price: 5.28,
      stock: 13,
    },
    {
      id: 45,
      name: 'Pasta - Tortellini, Fresh',
      price: 8.22,
      stock: 30,
    },
    {
      id: 46,
      name: 'Cut Wakame - Hanawakaba',
      price: 1.6,
      stock: 19,
    },
    {
      id: 47,
      name: 'Lettuce - Belgian Endive',
      price: 8.78,
      stock: 10,
    },
    {
      id: 48,
      name: 'Puree - Blackcurrant',
      price: 14.5,
      stock: 21,
    },
    {
      id: 49,
      name: 'Zucchini - Mini, Green',
      price: 3.5,
      stock: 81,
    },
    {
      id: 50,
      name: 'Cinnamon Buns Sticky',
      price: 2.41,
      stock: 26,
    },
    {
      id: 51,
      name: 'Salmon - Canned',
      price: 7.48,
      stock: 42,
    },
    {
      id: 52,
      name: 'Pie Filling - Apple',
      price: 13.91,
      stock: 56,
    },
    {
      id: 53,
      name: 'Soup - Knorr, Veg / Beef',
      price: 11.41,
      stock: 99,
    },
    {
      id: 54,
      name: 'Lotus Rootlets - Canned',
      price: 12.79,
      stock: 84,
    },
    {
      id: 55,
      name: 'Ocean Spray - Kiwi Strawberry',
      price: 5.0,
      stock: 96,
    },
    {
      id: 56,
      name: 'Lemonade - Pineapple Passion',
      price: 13.25,
      stock: 68,
    },
    {
      id: 57,
      name: 'Pasta - Lasagna, Dry',
      price: 1.12,
      stock: 52,
    },
    {
      id: 58,
      name: 'Oranges',
      price: 1.75,
      stock: 33,
    },
    {
      id: 59,
      name: 'Pasta - Shells, Medium, Dry',
      price: 11.11,
      stock: 75,
    },
    {
      id: 60,
      name: 'Langers - Mango Nectar',
      price: 14.07,
      stock: 50,
    },
  ],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { id, value } = action.payload
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      )

      state.products[productIndex].stock += value
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
    },
    updateProduct: (state, action) => {
      const { id, product } = action.payload

      const productIndex = state.products.findIndex(
        (product) => product.id === id
      )

      state.products[productIndex] = { id, ...product }
    },
  },
})

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions

export default productsSlice.reducer
