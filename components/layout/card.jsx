import React from 'react';
import Product from './card-style';

//todo: Make this resuseable | Passing props

const Card = () => (
  <Product.Wrapper>
    <h1>A cool image here </h1> //todo: Bring in image from GraphQL query
    <hr />
    <Product.Content>
      {' '}
      //todo: Add content data here
      <ul>
        <li>Card Data</li>
        <li>Card Data</li>
        <li>Card Data</li>
      </ul>
    </Product.Content>
  </Product.Wrapper>
);

export default Card;
