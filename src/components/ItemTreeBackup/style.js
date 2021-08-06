import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: first-baseline;
  background: var(--white);
  padding: 0px 8vw 10px 8vw;
  

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 50px 8vw;
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  color: var(--font);
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 28px;
    line-height: 40px;
    padding-bottom: 29px;
  }
`;

export const Accordion = styled.div`
  width: 100%;
`;

export const AccordionSummary = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
  padding: 40px 0;
  

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 19.5px 0;
  }
`;

export const ContainerQuestion = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  svg{
    margin-left: 15px;
  }

  img {
    height: 23px;
    width: 23px;
  }

  @media screen and (max-width: 960px) {
    img {
      height: 18px;
      width: 18px;
    }
  }
`;

export const Questions = styled.p`
  font-size: 24px;
  color: var(--font);
  font-weight: 500;
  margin-left: 15px;

  

  @media screen and (max-width: 960px) {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 25px;
    margin: 19.5px 15px 15px 0;
  }
`;

export const Answer = styled.p`
  font-size: 18px;
  color: #5f5f5f;
  margin-top: 13px;
  margin-left: 15px;
  @media screen and (max-width: 960px) {
    margin-top: 0;
    margin-left: 0;
    font-size: 15px;
    line-height: 25px;
  }
`;
