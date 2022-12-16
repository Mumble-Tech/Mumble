import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {colors} from "./config/colors";
import {HomePage} from "./pages/HomePage";
import {Container} from "./components/General/Containers/Container";

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <HomePage />
    </Container>
  </React.StrictMode>
);
