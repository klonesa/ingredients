import React, { useEffect, useState, useCallback } from 'react';
import { Row, Button } from 'antd';

export const ListOfEffect = ({
  effect,
  ingredients,
  selectedIngredient,
  handleSelectIngredient
}) => {
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  const handleFilteredIngredients = useCallback(() => {
    const filteredIngredientsByEffect = ingredients.filter(
      ingredient =>
        ingredient.effects.includes(effect) &&
        ingredient.name !== selectedIngredient.name
    );
    setFilteredIngredients(filteredIngredientsByEffect);
  }, [effect, ingredients, selectedIngredient]);

  useEffect(() => {
    handleFilteredIngredients();
  }, [handleFilteredIngredients, selectedIngredient]);

  return filteredIngredients ? (
    <Row>
      {filteredIngredients.map(ingredient => (
        <Row
          key={ingredient.name}
          type="flex"
          justify="start"
          align="middle"
          style={{ padding: '5px 0' }}
        >
          <Button
            onClick={handleSelectIngredient.bind(null, ingredient)}
            type="dashed"
          >
            {ingredient.name}
          </Button>
        </Row>
      ))}
    </Row>
  ) : null;
};
