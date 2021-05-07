import React from 'react'
import { Title, RestaurantCard, Cover, Info, Address, LodgingImage, ClosedWarning, EndLine, Rating, RatingView } from '../../styles/restaurant-card'
import { SvgXml } from 'react-native-svg';
import Star from '../../../assets/star';
import Open from '../../../assets/open';

export const RestaurantInfo = (props) => {
  const {
    name = 'Name',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      "https://static-images.ifood.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-3.png"
    ],
    address = 'Some random 100 address',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    placeId
  } = props;

  const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <RestaurantCard elevation={5}>
      <Cover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          <RatingView>
            {ratingArray.map((element, i) => <SvgXml key={`star-${placeId}-${i}`} xml={Star} width={20} height={20} />)}
          </RatingView>
          <RatingView>
            {isOpenNow && !isClosedTemporarily ? <SvgXml xml={Open} width={20} height={20} /> : null}
            <LodgingImage source={{ uri: icon }} />
          </RatingView>
        </Rating>
        <EndLine>
          <Address>{address}</Address>
          {isClosedTemporarily ? <ClosedWarning>Closed temporarily</ClosedWarning> : null}
        </EndLine>
      </Info>
    </RestaurantCard >
  )
}