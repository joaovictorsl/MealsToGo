import { Card } from 'react-native-paper';
import styled from 'styled-components/native'

export const Address = styled.Text`
font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.fontSizes.body};
color: ${props => props.theme.colors.ui.primary}
`;
export const ClosedWarning = styled.Text`
font-family: ${props => props.theme.fonts.body};
font-size: ${props => props.theme.fontSizes.body};
color: ${props => props.theme.colors.ui.error}
`;
export const Title = styled.Text`
font-family: ${props => props.theme.fonts.heading};
font-size: ${props => props.theme.fontSizes.name};
color: ${props => props.theme.colors.ui.primary}
`;
export const RestaurantCard = styled(Card)`
padding: ${props => props.theme.sizes[0]};
border-radius: 7px;
margin-bottom: ${props => props.theme.sizes[1]}
`;

export const Cover = styled(Card.Cover)`
border-radius: 7px
`;

export const Info = styled.View`
padding: ${props => props.theme.sizes[0]};
`;

export const Rating = styled.View`
padding: ${props => props.theme.sizes[0]};
padding-left: 0px;
padding-bottom: 0px;
flex-direction: row;
justify-content: space-between;
`;
export const RatingView = styled.View`
flex-direction: row;
`;
export const EndLine = styled.View`
flex-direction: row;
justify-content: space-between
`;
export const LodgingImage = styled.Image`
width: 20px;
height: 20px;
margin-left: ${props => props.theme.sizes[0]};
`;

