import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import mediaQueries from 'utils/media-queries';

export default function NavLink(props) {
  const { active, icon, label, pathname } = props;

  const iconSrc = active ? `/static/menu-icons/${icon}-active.svg` : `/static/menu-icons/${icon}-inactive.svg`;

  return (
    <Container>
      <Link href={pathname}>
        <Wrapper active={active}>
          <Icon src={iconSrc} />
          <Text active={active}>{label}</Text>
        </Wrapper>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => (props.active ? '#4b8d74' : null)};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  padding: 10px 0;

  ${mediaQueries.desktop`
    height: 42px;
    justify-content: flex-start;
    padding: 0 0 0 38px;
  `}
`;

const Icon = styled.img`
  display: inline-block;
  width: 22px;

  ${mediaQueries.desktop`
    width: 14px;
  `}
`;

const Text = styled.a`
  color: ${(props) => (props.active ? '#fff' : '#c8e7db')};
  display: none;
  font-family: ${(props) => props.theme.fontFamilies.proxima};
  font-weight: 700;
  margin-left: 18px;

  ${mediaQueries.desktop`
    display: inline;
  `}
`;
