import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import Content from 'components/layout/content';
import PageWrapper from 'components/layout/page-wrapper';

export default function IndexPage() {
  return (
    <PageWrapper heading='Read me!' icon='dispensaries'>
      <Content.Wrapper>
        <Content.Body>
          <Content.Paragraph>Welcome to dutchie's front end technical challenge!</Content.Paragraph>

          <Content.Paragraph>
            In addition to vanilla React, the following tools are included in this project:
          </Content.Paragraph>
        </Content.Body>

        <Content.List>
          <Content.ListItem>
            <a href='https://www.styled-components.com/' target='_blank' rel='noreferrer'>
              Styled Components
            </a>
          </Content.ListItem>
          <Content.ListItem>
            <a href='https://lodash.com/' target='_blank' rel='noreferrer'>
              Lodash
            </a>
          </Content.ListItem>

          <Content.ListItem>
            <a href='https://www.apollographql.com/docs/react/' target='_blank' rel='noreferrer'>
              Apollo
            </a>
          </Content.ListItem>
        </Content.List>

        <Content.Body>
          <Content.Paragraph>
            Take a look at the package.json file to see any other packages installed that might help you out, and add
            whatever you need to get the challenge done.
          </Content.Paragraph>
          <Content.Paragraph>Feel free to look up anything you feel you need to complete the tasks!</Content.Paragraph>

          <Content.Paragraph>Click "The Challenge" in the left menu to get started.</Content.Paragraph>

          <Content.Paragraph>Good luck!</Content.Paragraph>
        </Content.Body>
      </Content.Wrapper>
    </PageWrapper>
  );
}
