import React from "react";
import Store from "statux";
import { local } from "brownies";
import { Code } from "react-feather";

import { GlobalStyle, Main, Header, Title, Link } from "./styled";
import List from "./List";
import AddItem from "./AddItem";
import Persist from "./Persist";

export default () => (
  <Store items={[]}>
    <GlobalStyle />
    <Persist />
    <Main>
      <Header>
        <Title>To Do</Title>
        <Link href="https://github.com/franciscop/todo">
          <Code size={26} />
        </Link>
      </Header>
      <List />
      <AddItem />
    </Main>
  </Store>
);
