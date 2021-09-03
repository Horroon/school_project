import Button from "./button.component";

export default {
  title: "Buttons",
};

export const PrimaryButton = () => <Button type="primary">Primary</Button>;
export const GhostButton = () => <Button type="ghost">Ghost</Button>;
export const DashedButton = () => <Button type="dashed">Dashed</Button>;
export const LinButton = () => <Button type="link">Link</Button>;
export const TextButton = () => <Button type="text">Text</Button>;
