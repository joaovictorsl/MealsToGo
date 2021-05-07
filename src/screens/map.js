import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { SafeArea } from '../styles/styles';

const MapScreen = () => {
  return (
    <Fragment>
      <SafeArea>
        <Text>Map</Text>
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </Fragment>
  )
}
export default MapScreen;