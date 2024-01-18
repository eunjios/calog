import styled from '@emotion/styled';
import { MdCircle } from 'react-icons/md';

interface Props {
  hasTodo: boolean;
  hasPost: boolean;
}

const Container = styled.div`
  margin-top: 4px;
  height: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

function Dot({ hasTodo, hasPost }: Props) {
  return (
    <Container>
      {hasTodo && <MdCircle size={5} fill="#666" />}
      {hasPost && <MdCircle size={5} fill="#d4d4d4" />}
    </Container>
  );
}

export default Dot;
