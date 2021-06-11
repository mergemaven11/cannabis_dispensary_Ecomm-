import React from 'react';
import styled from 'styled-components';

import Content from 'components/layout/content';
import PageWrapper from 'components/layout/page-wrapper';

//todo: Apollo GraphQL query here

// Product Card component here
// import Card from '../components/layout/card';
import Card from '../components/layout/ProductCard';
//  bring in the graphql data here

// complete layout with dummy data

import { products } from '../data';

export default function ProductCard() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <Content.Wrapper>
        <Card products={products} />
      </Content.Wrapper>
    </PageWrapper>
  );
}
