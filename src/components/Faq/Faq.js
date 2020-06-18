import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from './../../data/dataStore';


const Faq = () => (
  <Container>
    <Hero title={faq.title} image={faq.image}></Hero>
    <p>{faq.content}</p>
  </Container>
);

export default Faq;