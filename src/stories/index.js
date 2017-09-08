import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../web/theme/atoms/Buttons/BaseButton/BaseButton";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with YOLO", () => <Button name="YOLO">YOLO Button</Button>)
  .add("with Hello", () => <Button name="Hello">Hello Button</Button>);
