import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 22px;
  height: 22px;
`;

export const RestaurantCard = styled(Card)`
  elevation: 3;
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  marginBottom: ${(props) => props.theme.space[3] }
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
  fontFamily: ${(props) => props.theme.fonts.body};
  fontSize: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flexDirection: row;
  paddingTop: ${(props) => props.theme.space[2]};
  paddingBottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flexDirection: row;
  alignItems: center;
  marginTop: 3px;

`;

export const SectionEnd = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-end;
`;
