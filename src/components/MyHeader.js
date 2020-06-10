import {Header} from 'react-native-elements';
import React from 'react';

export default function MyHeader() {
  return (
    <Header
      containerStyle={{
        backgroundColor: '#ffc000',
        flexDirection: 'column',
        alignContent: 'center',
      }}
      centerComponent={{
        text: 'AUTORENT20XX',
        style: {
          color: '#000',
          fontWeight: 'bold',
        },
      }}
    />
  );
}
