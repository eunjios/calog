import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1.6px solid #f4f4f4;
  padding: 8px;

  & input {
    width: 100%;
    color: #333;
    font-size: 28px;
    font-weight: 700;
    line-height: 48px;
    outline: none;
    border: none;
  }

  & input::placeholder {
    color: #aeaeae;
    font-size: 24px;
    font-weight: 600;
    transform: translateY(-2px);
  }
`;

export const Content = styled.div`
  padding: 8px;
`;

export const Text = styled.div`
  width: 100%;

  & textarea {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR';
    color: #333;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    border: none;
    outline: none;
  }

  & textarea::placeholder {
    color: #aeaeae;
    font-size: 14px;
  }
`;
