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

const Todo = ({ id }) => {
  const index = useSelector(state => state.items.findIndex(it => it.id === id));
  const [done, setDone] = useStore(`items.${index}.done`);
  const text = useSelector(`items.${index}.text`);
  const { remove } = useActions("items");
  return (
    <Item>
      <Label onClick={() => setDone(!done)}>
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
  return items.map(item => <Todo key={item.id} id={item.id} />);
};
