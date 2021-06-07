import styled from "styled-components/native";

import {Text} from 'react-native'

const defaultTextStyles = (theme) => `
  fontFamily: ${theme.fonts.body};
  fontWeight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flexWrap: wrap;
  marginTop: 0px;
  marginBottom: 0px;
`;

const body = (theme) => `
    fontSize: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    fontSize: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    fontSize: ${theme.fontSizes.caption};
    fontWeight: ${theme.fontWeights.bold};
`;

const label = (theme) => `
    fontFamily: ${theme.fonts.heading};
    fontSize: ${theme.fontSizes.body};
    fontWeight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const TextTypoGraph = styled(Text)`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};