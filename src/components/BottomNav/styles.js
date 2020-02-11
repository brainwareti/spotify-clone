import styled from 'styled-components';

export const Container = styled.View`
  background-color: #222;
  height: 70px;
  border-width: 1px;
  border-top-color: #000;
  flex-direction: row;
`;

export const GroupAction = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ActionName = styled.Text`
  color: #fff;
  font-size: 11px;
  padding: 5px;
`;
