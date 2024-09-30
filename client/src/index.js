import {
  Box,
  Button,
  Container,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FormControl } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Wrapper from './context/GlobalWrapper';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Wrapper>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Wrapper>,
);