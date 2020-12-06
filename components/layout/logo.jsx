import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import mediaQueries from 'utils/media-queries';

export default function Logo() {
  return (
    <Link href='/'>
      <Container>
        <Image src='/static/superadmin-icon.svg' />
      </Container>
    </Link>
  );
}

const Container = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 90%;

  ${mediaQueries.desktop`
    width: 111px;
  `}
`;

const Image = styled.img`
  display: block;
`;
