import React from "react";
import Store from "statux";
import { local } from "brownies";

import { GlobalStyle, Main, Title } from "./styled";
import List from "./List";
import AddItem from "./AddItem";
import Persist from "./Persist";

export default () => (
  <Store items={local.items || []}>
    <GlobalStyle />
    <Persist />
    <Main>
      <Title>To Do</Title>
      <List />
      <AddItem />
    </Main>
  </Store>
);
