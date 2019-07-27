import React from "react";
import { useStore } from "statux";

import { Send } from "react-feather";
import forn from "forn";

import { Form, Input, SendIcon } from "./styled";

// A button to send the information
const SendButton = () => (
  <SendIcon>
    <Send size={18} />
  </SendIcon>
);

export default () => {
  const [items, { append }] = useStore("items");
  return (
    <Form
      onSubmit={forn(data => append(data), { reset: true })}
      autoComplete="off"
    >
      <Input type="hidden" name="id" value={items.length} />
      <Input
        name="text"
        placeholder={items.length ? "Add a new item" : "Add the first item"}
        required
        autoComplete="off"
      />
      <SendButton />
    </Form>
  );
};
