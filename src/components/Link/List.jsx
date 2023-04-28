import React from "react";
import Link from "./Link";

const List = ({ array, onRemoveItem }) => {
  return array.map(({ id }) => {
    const handleRemoveItem = () => {
      onRemoveItem(id)
    };
    return <Link key={id} onRemoveItem={handleRemoveItem} />
  });
};

export default List;
