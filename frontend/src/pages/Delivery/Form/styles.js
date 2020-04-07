import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 900px;
  margin-left: 150px;

  height: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 900px;
  width: 100%;
  height: 225px;

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
  .last-field {
    margin-top: 40px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  margin: 27px auto;

  justify-content: space-between;
  div {
    margin: 0 10px;
    button {
      margin: 0 5px;
    }
  }
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
