import React from 'react';
import styled from 'styled-components';

import Content from 'components/layout/content';
import PageWrapper from 'components/layout/page-wrapper';

export default function ProductCard() {
  return (
    <PageWrapper heading='The Result' icon='menu'>
      <Content.Wrapper></Content.Wrapper>
    </PageWrapper>
  );
}
