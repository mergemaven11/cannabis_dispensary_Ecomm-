import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.5;
  max-width: 600px;
`;

const Image = styled.img`
  display: inline-block;
  height: 430px;
  margin-bottom: 12px;
  width: 300px;
`;

const Body = styled.div`
  margin-bottom: 12px;
`;

const Paragraph = styled.div`
  margin-bottom: 6px;

  :last-child {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  list-style: circle inside;
  margin-bottom: 12px;
`;

const ListItem = styled.li`
  line-height: 2;
`;

export default {
  Wrapper,
  Image,
  Body,
  Paragraph,
  List,
  ListItem,
};
