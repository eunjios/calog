import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  margin: 0 auto;
  width: 90%;
  max-width: 768px;
  flex-grow: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
  }
`;

export const Header = styled.header`
  font-family: 'Afacad';
  font-weight: 500;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding: 0 5%;
  top: 0;
  left: 0;
  flex-shrink: 0;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
`;

export const PublishBtn = styled.button`
  font-family: 'Afacad';
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 16px;
  background: var(--primary1);
  color: var(--text-white);
  border: none;
  cursor: pointer;

  &:hover,
  :active {
    background: var(--primary2);
  }
`;
