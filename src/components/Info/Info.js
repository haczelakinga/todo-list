import React from 'react';
import Container from '../Container/Container';
import {info} from './../../data/dataStore';

const Info = () => (
  <Container>
    <h2>{info.title}</h2>
    <p>{info.content}</p>
  </Container>
);

export default Info;