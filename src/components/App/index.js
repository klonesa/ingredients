import React from 'react';
import { Row } from 'antd';
import IngredientContainer from '../../containers/IngredientContainer';
import { SelectionArea, IngredientDetail, Effects } from '../../components';
import './App.css';

export const App = () => {
  return (
    <IngredientContainer>
      {({
        allIngredientsCount,
        selectedIngredient,
        ingredients,
        handleAddIngredient,
        handleRemoveIngredient,
        handleUpdateIngredient,
        handleSelectIngredient
      }) => (
        <Row>
          <SelectionArea
            ingredients={ingredients}
            handleSelectIngredient={handleSelectIngredient}
            allIngredientsCount={allIngredientsCount}
            selectedIngredient={selectedIngredient}
          />
          <IngredientDetail
            ingredients={ingredients}
            selectedIngredient={selectedIngredient}
            handleRemoveIngredient={handleRemoveIngredient}
            handleUpdateIngredient={handleUpdateIngredient}
          />
          <Effects
            ingredients={ingredients}
            selectedIngredient={selectedIngredient}
            handleSelectIngredient={handleSelectIngredient}
          />
        </Row>
      )}
    </IngredientContainer>
  );
};
