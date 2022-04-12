import React from "react";

const Button = ({ name }: { name: string }): JSX.Element => (
    <div>Hey {name}, say hellos to sTypeScript.</div>
);

export default Button;