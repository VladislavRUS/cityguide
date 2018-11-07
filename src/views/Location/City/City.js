import React from 'react';
import Button from '../../../components/Button';
import {
  Wrapper,
  ImageWrapper,
  Image,
  Title,
  Info,
  ButtonWrapper
} from './City.styles';

class City extends React.Component {
  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <Image source={this.props.city.image} resizeMode={'contain'} />
        </ImageWrapper>
        <Title>{this.props.city.name}</Title>
        <Info>{this.props.city.info}</Info>
        <ButtonWrapper>
          <Button
            text={'Choose'}
            backgroundColor={'#2196f3'}
            onPress={() => this.props.onChoose(this.props.city)}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

export default City;
