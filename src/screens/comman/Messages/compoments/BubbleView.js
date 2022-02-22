import styled from 'styled-components';

import colors from '../../../../theme/colors';

export const BubbleLeft = styled.View`
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${colors.white};
  margin: 15px 60px 10px 0px;
  padding: 10px;
`;

export const BubbleRight = styled.View`
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: ${colors.primary};
  margin: 15px 0px 0px 60px;
  padding: 10px;
`;
