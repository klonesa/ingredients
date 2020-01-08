import React, { useEffect, useState } from 'react';
import { Row, Col, Select, Typography } from 'antd';

export const SelectionArea = ({
  ingredients,
  allIngredientsCount,
  selectedIngredient,
  handleSelectIngredient
}) => {
  const [name, setName] = useState('');
  const { Option } = Select;
  const { Title, Paragraph } = Typography;

  const onChange = name => {
    const selectedIngredient = ingredients.find(
      ingredient => ingredient.name === name
    );
    selectedIngredient && handleSelectIngredient(selectedIngredient);
  };

  useEffect(() => {
    selectedIngredient && setName(selectedIngredient.name);
  }, [selectedIngredient]);

  return (
    <Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ margin: '40px 0 20px' }}
      >
        <Title style={{ margin: 0 }}>INGREDIENTS</Title>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ margin: '0 0 5px' }}
      >
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <Select
            showSearch
            value={name ? name : undefined}
            style={{ width: '100%' }}
            placeholder="Select an ingredient"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {ingredients.map(ingredient => (
              <Option key={ingredient.id} value={ingredient.name}>
                {ingredient.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ margin: '0 0 20px' }}
      >
        <Paragraph style={{ margin: 0 }}>
          Total Ingredients: {allIngredientsCount}
        </Paragraph>
      </Row>
    </Row>
  );
};
