import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 30px 0 30px 200px;

  max-width: 900px;

  max-height: 100%;
`;

export const FormHeader = styled.div`
  display: flex;

  justify-content: space-between;
  max-width: 900px;
  margin: 30px 0;
`;

export const TextHeader = styled.text`
  font-size: 24px;
  font-style: 'Roboto';
  font-weight: bold;
`;

export const FormContent = styled.div`
  display: flex;

  background: #fff;
  height: 220px;
  max-width: 900px;
  border-radius: 5px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 26px 0 16px 30px;
  input {
    width: 405px;
    border: 1px solid #dddddd;
    height: 45px;
    border-radius: 4px;

    ::placeholder {
      margin-left: 10px;
    }
  }
`;

export const FormInput = styled.input`
  width: 405px;
  border: 1px solid #dddddd;
  height: 45px;
  border-radius: 4px;

  ::placeholder {
    margin-left: 10px;
  }
`;
export const MyText = styled.text`
  font-size: 14px;
  font-style: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`;
