import React from "react";
import { useStore, useActions } from "statux";
import { Trash } from "react-feather";

import { Item, Label, Paragraph, Checkbox, Text, TrashIcon } from "./styled";

const Check = ({ checked }) => <Checkbox checked={checked} />;

const Remove = ({ onClick }) => (
  <TrashIcon onClick={onClick}>
    <Trash size={16} />
  </TrashIcon>
);

const Todo = ({ index, text, done }) => {
  const { remove } = useActions("items");
  const { extend } = useActions(`items.${index}`);
  return (
    <Item>
      <Label onClick={() => extend({ done: !done })}>
        <Paragraph>
          <Check checked={done} />
          <Text>{text}</Text>
        </Paragraph>
      </Label>
      <Remove onClick={() => remove(index)} />
    </Item>
  );
};

export default () => {
  const [items] = useStore("items");
  if (!items.length) return <Paragraph>Add your first task:</Paragraph>;
  return items.map((item, i) => <Todo key={i} index={i} {...item} />);
};
