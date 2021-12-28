import { Platform, SafeAreaView, StatusBar, View } from 'react-native'
import { ActivityIndicator as Activity } from 'react-native-paper';
import styled from 'styled-components/native'
//Todo styled pega o theme como props
export const Container = styled.View`
flex: 1;
background-color: ${props => props.theme.colors.bg.secondary};
alignItems: center;
`
export const SafeArea = styled(SafeAreaView)`
flex: 1;
${Platform.OS === 'android' ? `margin-top: ${StatusBar.currentHeight}px;` : null}
`
export const SearchbarView = styled.View`
padding: ${props => props.theme.sizes[0]};
width: 100%;
`
export const CardView = styled(View)`
padding: ${props => props.theme.sizes[0]};
padding-bottom: 0px;
width: 100%;
flex: 1;
`
export const ActivityIndicator = styled(Activity)`
flex: 1;
`