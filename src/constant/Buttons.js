import styled from 'styled-components';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from './BreakPoint';
import { theme } from './Theme';

const primaryColor = 'blue';
const primaryColor2 = 'green';
const padding__12 = 'padding: 12px';
const border = (width, color) => {
  return `border: ${width} solid ${color}`;
};

export const Button = styled.button`
  ${padding__12};
  background: ${(props) => (props.primary ? `${primaryColor}` : 'white')};
  color: ${(props) => (props.primary ? 'white' : `${primaryColor}`)};
  font-size: 1rem;
  margin: 1em;
  ${border('6px', `${primaryColor2}`)};
  border-radius: 3px;

  ${MEDIA_QUERY_SM} {
    font-size: 1.2em;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 1.5em;
  }
`;

export const NewButton = styled(Button)`
  font-size: 2rem;
  color: ${theme.colors.primary_400};
`;
