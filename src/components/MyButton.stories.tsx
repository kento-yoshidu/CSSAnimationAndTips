import MyButton from "./MyButton";

import { MyButtonProps } from "./MyButton";

export default {
  title: "Sample",
  component: MyButton,
};

export const Base = {
  render: (args: MyButtonProps) => <MyButton {...args} />,
  args: {
    primary: true,
    size: "medium",
    label: "ボタン",
    onClick: () => console.log("テスト")

  },
};

export const White = {
  render: () =>
    <MyButton
      size="small"
      label="ボタン"
      backgroundColor="FFF"
    />,
};
