import styled from '@emotion/styled';
import { MdCircle } from 'react-icons/md';

const Container = styled.div`
  margin-top: 4px;
  height: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot = () => {
  return (
    <Container>
      <MdCircle size={5} fill="#d4d4d4" />
    </Container>
  );
};

const Empty = () => {
  return <Container />;
};

export { Dot, Empty };
