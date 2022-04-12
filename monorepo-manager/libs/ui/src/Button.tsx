import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
    <div>Hey {name}, say hellos to sTypeScript.</div>
);

export default SayHello;