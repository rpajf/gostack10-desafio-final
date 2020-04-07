import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  justify-content: center;
  height: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  height: 225px;
  margin: 0 135px;

  background: #fff;
  input {
    height: 45px;
    border-radius: 4px;

    border: 1px solid #dddd;
    ::placeholder {
      color: #9999;
    }
  }

  div {
    display: flex;

    justify-content: space-between;
  }
`;

export const FormHeader = styled.div`
  display: flex;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 16px 30px 0;
`;

export const Text = styled.text`
  font-size: 14px;
  font-style: 'Roboto';
  font-weight: bold;
`;

export const TextHeader = styled.text`
  font-size: 24px;
  font-style: 'Roboto';
  font-weight: bold;
`;
