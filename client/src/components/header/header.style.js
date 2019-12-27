import styled, {css} from 'styled-components';

import {Link} from 'react-router-dom';

const OptionItems = css`
  padding: 10px 15px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 12px;
    padding: 8px 5px;
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionItem = styled.div`
  ${OptionItems};
  cursor: unset;
`;

export const OptionLink = styled(Link)`
  ${OptionItems}
`;
