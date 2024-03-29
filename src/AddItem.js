import React from "react";
import { useStore } from "statux";
import Form from "form-mate";
import { Send } from "react-feather";

import { Input, Item, SendIcon } from "./styled";

// A button to send the information
const SendButton = () => (
  <SendIcon>
    <Send size={18} />
  </SendIcon>
);

export default () => {
  const [items, { append }] = useStore("items");
  const newId = Math.max(0, ...items.map(it => it.id)) + 1;
  return (
    <Form onSubmit={append} autoComplete="off" autoReset>
      <Item>
        <Input type="hidden" name="id" value={newId} />
        <Input
          name="text"
          placeholder={items.length ? "Add a new item" : "Add the first item"}
          required
          autoComplete="off"
        />
        <SendButton />
      </Item>
    </Form>
  );
};
