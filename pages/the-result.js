import React from 'react';
import styled from 'styled-components';

import Content from 'components/layout/content';
import PageWrapper from 'components/layout/page-wrapper';

//todo: Apollo GraphQL query here

// Product Card component here
import Card from '../components/layout/card';

export default function ProductCard() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <Content.Wrapper>
        <Card />
      </Content.Wrapper>
    </PageWrapper>
  );
}
