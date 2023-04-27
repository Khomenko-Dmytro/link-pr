import React from "react";
import Link from "./Link";

const List = ({ array }) => array.map(({id}) => <Link key={id} />);

export default List;