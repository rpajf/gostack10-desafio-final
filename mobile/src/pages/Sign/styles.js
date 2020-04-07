import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  background-color: #7d40e7;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FormArea = styled.View`
  display: flex;
  justify-content: center;
`;

export const SignInButton = styled(Button)`
  background: #82bf18;
  width: 325px;
  height: 45px;
`;

export const FormInput = styled(Input)`
  margin: 35px 0 15px 0;
`;

// export const InputArea = styled.TextInput`
//   width: 325px;
//   margin: 35px 0 15px 0;
//   height: 43px;
//   border-radius: 4px;

//   background-color: #fff;
//   ::placeholder {
//     color: #9999;
//   }
// `;
