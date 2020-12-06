import _ from 'lodash';
import { withRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import Logo from 'components/layout/logo';
import NavLink from 'components/layout/navigation/nav-link';

import mediaQueries from 'utils/media-queries';

const routes = [
  {
    icon: 'dispensaries',
    key: 'index',
    label: 'Read me!',
    pathname: '/',
  },
  {
    icon: 'menu',
    key: 'the-challenge',
    label: 'The Challenge',
    pathname: '/the-challenge',
  },
  {
    icon: 'menu',
    key: 'the-result',
    label: 'The Result',
    pathname: '/the-result',
  },
];

function Navigation(props) {
  const { router } = props;

  return (
    <Container>
      <Logo />

      <NavWrapper>
        {_.map(routes, (route) => (
          <NavLink
            active={router.pathname === route.pathname}
            icon={route.icon}
            key={route.key}
            label={route.label}
            pathname={route.pathname}
          />
        ))}
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundMenu};
  flex: 0 0 auto;
  padding-top: 37px;
  width: 68px;

  ${mediaQueries.desktop`
    width: 200px;
  `}
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 42px;
  padding-top: 41px;
`;

export default withRouter(Navigation);
