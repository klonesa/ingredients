import React, { useEffect } from 'react';
import { Row, Col, Collapse, Typography } from 'antd';
import { ListOfEffect } from '../components';

export const Effects = ({
  selectedIngredient,
  ingredients,
  handleSelectIngredient
}) => {
  const { effects } = selectedIngredient;
  const { Panel } = Collapse;
  const { Title } = Typography;

  useEffect(() => {}, [selectedIngredient]);

  return effects ? (
    <Row style={{ marginBottom: '40px' }}>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ marginBottom: '20px' }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Effects
        </Title>
      </Row>
      <Row type="flex" justify="center" align="middle">
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <Collapse accordion>
            {effects.map(effect => (
              <Panel header={effect} key={effect}>
                <ListOfEffect
                  effect={effect}
                  ingredients={ingredients}
                  selectedIngredient={selectedIngredient}
                  handleSelectIngredient={handleSelectIngredient}
                />
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </Row>
  ) : null;
};
