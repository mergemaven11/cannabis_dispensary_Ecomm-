import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 6px;
  padding: 25px;
  width: 275px;
  height: 390px;
  position: relative;
  /* top: 10px;
  left: 10px; */
  overflow: auto;
  background: #ffffff;
  border: 0.5px solid;
  border-radius: 8px;
  border-color: #bebebe;
  box-shadow: 7px 7px 14px #dddada, -7px -7px 14px #ededed;
`;
const Title = styled.h1`
  font-size: large;
  color: #61a58b;
`;

const Content = styled.div`
  margin: 10px;
  font-weight: 2;
`;

export { Wrapper, Title, Content };
