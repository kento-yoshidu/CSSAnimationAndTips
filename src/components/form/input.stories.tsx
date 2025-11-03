import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Sample/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: "ユーザー名",
    placeholder: "kurage123",
  },
};
