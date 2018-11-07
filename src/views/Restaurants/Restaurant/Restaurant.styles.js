import styled, { css } from 'styled-components';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 30px;
  height: 80px;

  ${props =>
    props.showBorder &&
    css`
      ${{ borderBottomWidth: 1 }};
      ${{ borderBottomColor: '#b6b6b6' }};
    `};
`;

export const ImageWrapper = styled.View`
  margin-right: 14px;
  width: 55px;
  height: 55px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  color: #212121;
  font-family: Lato-Regular;
  font-size: 15px;
  margin-bottom: 8px;
`;

export const Details = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Location = styled.View`
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LocationIconWrapper = styled.View`
  margin-right: 6px;
  width: 7px;
  height: 10px;
`;

export const LocationIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LocationText = styled.Text`
  color: #727272;
  font-family: Lato-Light;
  font-size: 13px;
`;

export const Likes = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LikesIconWrapper = styled.View`
  margin-right: 4px;
  width: 10px;
  height: 10px;
`;

export const LikesIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LikesText = styled.Text`
  color: #727272;
  font-family: Lato-Light;
  font-size: 13px;
`;

export const ChevronWrapper = styled.View`
  position: absolute;
  right: 30px;
  top: 34px;
  width: 7px;
  height: 12px;
`;

export const Chevron = styled.Image`
  width: 100%;
  height: 100%;
`;
