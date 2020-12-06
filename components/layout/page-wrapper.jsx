import React from 'react';
import styled from 'styled-components';

export default function PageWrapper(props) {
  const { children, heading, icon } = props;

  const iconSrc = `/static/menu-icons/${icon}-big.svg`;

  return (
    <Container>
      <Header>
        <Icon src={iconSrc} />
        <Heading>{heading}</Heading>
      </Header>

      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1 0 0%;
  flex-direction: column;
  min-width: 0;
`;

const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid #c8ced4;
  display: flex;
  flex: 0 0 auto;
  height: 72px;
  padding-left: 34px;
`;

const Icon = styled.img`
  width: 16px;
`;

const Heading = styled.h1`
  color: #9fa6ad;
  font-family: ${(props) => props.theme.fontFamilies.proxima};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  margin-left: 13px;
`;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundContent};
  flex: 1 0 0%;
  min-height: 0;
  overflow-y: scroll;
  padding: 32px;
`;

// This needs to be adjusted

const Content = styled.div`
  max-width: 768px;
`;
