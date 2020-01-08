import React from 'react';
import { Row, Col, Avatar, Typography } from 'antd';

export const IngredientDetail = ({ selectedIngredient, ingredients }) => {
  const { effects, image, value, name, weight } = selectedIngredient;
  const { Title, Paragraph } = Typography;
  return effects ? (
    <Row>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ marginBottom: '20px' }}
      >
        <Col
          xs={20}
          sm={16}
          md={12}
          lg={8}
          xl={4}
          style={{
            padding: '20px',
            borderRadius: '4px',
            backgroundColor: '#fafafa',
            border: '1px solid #d9d9d9'
          }}
        >
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ margin: '0 0 10px' }}
          >
            <Avatar size={64} src={image} />
          </Row>
          <Row
            type="flex"
            justify="center"
            align="middle"
            style={{ margin: '0 0 10px' }}
          >
            <Title level={2} style={{ margin: 0 }}>
              {name}
            </Title>
          </Row>
          <Row>
            <Row type="flex" justify="center" align="middle">
              <Paragraph style={{ margin: 0 }}>Value: {value}</Paragraph>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <Paragraph style={{ margin: 0 }}>Weight: {weight}</Paragraph>
            </Row>
          </Row>
        </Col>
      </Row>
    </Row>
  ) : null;
};
