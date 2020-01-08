import PropTypes from 'prop-types';

export const ingredientType = PropTypes.shape({
  id: PropTypes.number,
  effects: PropTypes.array,
  image: PropTypes.string,
  value: PropTypes.number,
  name: PropTypes.string,
  weight: PropTypes.number
});
