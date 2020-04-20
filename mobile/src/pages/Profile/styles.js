import styled from 'styled-components/native';
import Text from '~/components/Text';

import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;
export const ProfileContainer = styled.View`
  margin: 83px 35px 0 54px;
  display: flex;
`;

export const BolderText = styled(Text)`
  font-size: 22px;
  font-weight: bold;
`;
export const Avatar = styled.Image`
  margin-left: 83px;
  margin-bottom: 10px;
  width: 136px;
  height: 136px;
  border-radius: 50px;
`;

export const NormalText = styled(Text)`
  font-size: 12px;
`;

export const TextDiv = styled.View`
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const LogoutBtn = styled(Button)`
  margin-top: 30px;
  margin-right: 15px;
  background: #e74040;
`;
