import { fromJS, Map } from 'immutable';
import * as Types from './types';

const initialState = fromJS({
  ingredients: {},
  selectedIngredient: {}
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_INGREDIENT: {
      const { ingredient } = action.payload;

      return state.setIn(
        ['ingredients', ingredient.id.toString()],
        Map(ingredient)
      );
    }

    case Types.REMOVE_INGREDIENT: {
      const { ingredientId } = action.payload;

      return state.deleteIn(['ingredients', ingredientId.toString()]);
    }

    case Types.UPDATE_INGREDIENT: {
      const { ingredient } = action.payload;

      return state.setIn(
        ['ingredients', ingredient.id.toString()],
        Map(ingredient)
      );
    }

    case Types.SELECT_INGREDIENT: {
      const { ingredient } = action.payload;

      return state.set('selectedIngredient', Map(ingredient));
    }

    default: {
      return state;
    }
  }
};
