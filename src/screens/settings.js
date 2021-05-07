import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { Fragment } from 'react';
import { Text } from 'react-native';
import { SafeArea } from '../styles/styles';

const SettingsScreen = () => {
  return (
    <Fragment>
      <SafeArea>
        <Text>Settings</Text>
      </SafeArea>
      <ExpoStatusBar style='auto' />
    </Fragment>
  )
}
export default SettingsScreen;