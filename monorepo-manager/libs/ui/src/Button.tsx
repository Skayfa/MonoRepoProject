import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
    <div className=" bg-gray-500 font-bold">Hey {name}, dsayd hellos to sTypeScript.</div>
);

export default SayHello;