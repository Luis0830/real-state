import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;
const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px){
    grid-template-columns: 2fr;
    grid-template-rows: 300px;
    padding-top: 0;
}
`;
const Columnleft = styled.div`
display: flex;
Flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4; //1.4
padding: 1rem 4rem;
order: ${({ reverse }) => (reverse? '2' : '1')};



h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p {
    margin-bottom: 1.5rem;
}
@media screen and (max-width: 768px) {
    line-height: 1.0; 
    padding: 10px;
    align-items: center;
    text-align: center;
    
    p {
    margin-bottom: 3.5rem;
}
h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}
}
`;
const ColumnRight = styled.div`
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;



@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse? 2 : 1)};
    padding: 0;
    
}

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


    @media screen and (max-width: 768px){
        width: 90%;
        height: 90%;
        
    }

}
`;

const InfoSection = ({heading, paragrOne, paragrTwo, buttonLabel, reverse, image}) => {
    return(
       <Section>
        <Container>
            <Columnleft>
            <h1>{heading}</h1>
            <p>{paragrOne}</p>
            <p>{paragrTwo}</p>
            <Button to='/inmueble' primary='true'>{buttonLabel}</Button>
            </Columnleft>
            <ColumnRight reverse={reverse}>
            <img src={image} alt="home" className='rounded-tl-curves rounded-br-curves'/>
            </ColumnRight>
        </Container>
       </Section>
    )
}

export default InfoSection;