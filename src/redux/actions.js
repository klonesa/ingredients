import * as Types from './types';

export const addIngredient = ingredient => ({
  type: Types.ADD_INGREDIENT,
  payload: {
    ingredient
  }
});

export const updateIngredient = ingredient => ({
  type: Types.UPDATE_INGREDIENT,
  payload: {
    ingredient
  }
});

export const removeIngredient = ingredientId => ({
  type: Types.REMOVE_INGREDIENT,
  payload: {
    ingredientId
  }
});

export const selectIngredient = ingredient => ({
  type: Types.SELECT_INGREDIENT,
  payload: {
    ingredient
  }
});
