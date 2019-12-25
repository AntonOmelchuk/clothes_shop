import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;
