import { useStore } from "statux";
import { useEffect } from "react";
import { local } from "brownies";

// Persist the items in local storage when they change
export default () => {
  const [items] = useStore("items");
  useEffect(
    () => {
      local.items = items;
    },
    [items]
  );
  return null;
};
