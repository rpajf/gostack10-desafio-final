import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  height: 180px;
`;
export const Title = styled.text`
  font-size: 16px;
  font-weight: bold;
  font-style: 'Roboto';
`;

export const Search = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  button {
    width: 142px;
    height: 36px;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;

    border-radius: 4px;
    border: none;
  }
`;
