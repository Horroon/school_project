import Button from "./button.component";

export default {
  title: "Buttons",
};

export const Primary = () => <Button type="primary">Primary</Button>;
export const Ghost = () => <Button type="ghost">Ghost</Button>;
export const Dashed = () => <Button type="dashed">Dashed</Button>;
export const Link = () => <Button type="link">Link</Button>;
export const Text = () => <Button type="text">Text</Button>;
