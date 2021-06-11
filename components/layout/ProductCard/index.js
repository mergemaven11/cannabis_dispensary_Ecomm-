import React from 'react';
// import Product from './card-style';
import { Wrapper, Title, Content } from './card-style';

//todo: Make this resuseable | Passing props

const Card = (props) => {
  const products = props.products;
  return (
    <>
      {products.map((product) => {
        return (
          <Wrapper>
            {/* Image */}
            <Title>{product.Name} </Title>
            <img style={{ height: 150 }} src={product.Image} />
            <hr />
            <Content>
              {' '}
              {/* strain container details  */}
              <ul style={{ fontWeight: '400' }}>
                <li>
                  Strain Type: <span>{product.strainType}</span>
                </li>
                <li>
                  Type: <span>{product.type}</span>
                </li>
                <li>
                  THC: {product.THCContent} CBD: {product.CBDContent || 'n/a'}
                </li>
              </ul>
              <a href='#'> Link</a>
              {/* Button with Modal component onClick  */}
            </Content>
          </Wrapper>
        );
      })}
    </>
  );
};

export default Card;
