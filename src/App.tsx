import Store from "statux";
import { local } from "brownies";
import { Code } from "lucide-react";

import { GlobalStyle, Main, Header, Title, Link, Footer } from "./styled";
import List from "./List";
import AddItem from "./AddItem";
import Persist from "./Persist";

export default () => (
  <Store items={local.items || []}>
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
      <Footer>
        Made by <a href="https://francisco.io/">Francisco</a>.
      </Footer>
    </Main>
  </Store>
);
