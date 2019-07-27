import React from "react";
import { useStore, useSelector, useActions } from "statux";
import { Trash } from "react-feather";

import { Item, Label, Paragraph, Checkbox, Text, TrashIcon } from "./styled";

const Check = ({ checked }) => <Checkbox checked={checked} />;

const Remove = ({ onClick }) => (
  <TrashIcon onClick={onClick}>
    <Trash size={16} />
  </TrashIcon>
);

const Todo = ({ id, text, done }) => {
  const index = useSelector(state => state.items.findIndex(it => it.id === id));
  const { remove } = useActions("items");
  const { extend } = useActions(`items.${index}`);
  if (index === -1) return null;
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
  if (!items.length) return null;
  return items
    .slice()
    .sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1))
    .map(item => <Todo key={item.id} {...item} />);
};
