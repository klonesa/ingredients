import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ingredientType } from '../helpers/types';
import {
  addIngredient,
  removeIngredient,
  updateIngredient,
  selectIngredient
} from '../redux/actions';
import {
  allIngredientsCountSelector,
  ingredientsSelector,
  selectedIngredientSelector
} from '../redux/selectors';

const IngredientContainer = ({
  children,
  allIngredientsCount,
  selectedIngredient,
  ingredients,
  addIngredient: _addIngredient,
  removeIngredient: _removeIngredient,
  updateIngredient: _updateIngredient,
  selectIngredient: _selectIngredient
}) => {
  const handleAddIngredient = ingredient => {
    _addIngredient(ingredient);
  };

  const handleRemoveIngredient = ingredientId => {
    _removeIngredient(ingredientId);
  };

  const handleUpdateIngredient = ingredient => {
    _updateIngredient(ingredient);
  };

  const handleSelectIngredient = ingredient => {
    _selectIngredient(ingredient);
  };

  return children({
    allIngredientsCount,
    selectedIngredient,
    ingredients,
    handleAddIngredient,
    handleRemoveIngredient,
    handleUpdateIngredient,
    handleSelectIngredient
  });
};

IngredientContainer.propTypes = {
  children: PropTypes.func.isRequired,
  allIngredientsCount: PropTypes.number,
  selectedIngredient: ingredientType,
  ingredients: PropTypes.arrayOf(ingredientType),
  addIngredient: PropTypes.func,
  removeIngredient: PropTypes.func,
  updateIngredient: PropTypes.func,
  selectIngredient: PropTypes.func
};

IngredientContainer.defaultProps = {
  allIngredientsCount: 0,
  selectedIngredient: {
    id: null,
    effects: [],
    image: '',
    value: null,
    name: '',
    weight: null
  },
  ingredients: [],
  addIngredient: null,
  removeIngredient: null,
  updateIngredient: null,
  selectIngredient: null
};

export default connect(
  state => ({
    allIngredientsCount: allIngredientsCountSelector(state),
    selectedIngredient: selectedIngredientSelector(state),
    ingredients: ingredientsSelector(state)
  }),
  {
    addIngredient,
    removeIngredient,
    updateIngredient,
    selectIngredient
  }
)(IngredientContainer);
