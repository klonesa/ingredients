import { createSelector } from 'reselect';

export const ingredientsSelector = createSelector(
  [state => state.get('ingredients')],
  ingredients => ingredients.toIndexedSeq().toJS()
);

export const allIngredientsCountSelector = createSelector(
  [state => state.get('ingredients')],
  ingredients => ingredients.count()
);

export const selectedIngredientSelector = createSelector(
  [state => state.get('selectedIngredient')],
  selectedIngredient => selectedIngredient.toJS()
);
