import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem;
    margin-left: auto;

  div{
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-width: 320px;
    max-width: 540px;
  }
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Icon = styled.span`
  margin-left: 2rem;
  cursor: pointer;
`;

export const Item = styled.span`
  font-family: 'Poppins', sans-serif;
  margin-left: 2rem;
  font-weight: 600;
  color: #004359;
  
    margin-right: auto;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  color: #0086E4;
  font-weight: 600;
  text-align: center;
`;