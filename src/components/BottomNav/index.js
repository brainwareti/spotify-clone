import React, {useState} from 'react';

import {Container, GroupAction, ActionName} from './styles';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomNav = () => {
  const [iconConfigure] = useState({
    color: '#fff',
    size: 25,
  });

  return (
    <Container>
      <GroupAction>
        <FontAwesome5 name={'home'} {...iconConfigure} />
        <ActionName>Início</ActionName>
      </GroupAction>
      <GroupAction>
        <FontAwesome5 name={'search'} {...iconConfigure} />
        <ActionName>Buscar</ActionName>
      </GroupAction>
      <GroupAction>
        <FontAwesome5 name={'book-reader'} {...iconConfigure} />
        <ActionName>Sua Biblioteca</ActionName>
      </GroupAction>
    </Container>
  );
};

export default BottomNav;
