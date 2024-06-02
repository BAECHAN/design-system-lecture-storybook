import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 src 속성",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "/icons/ic-public-delete-dark.svg",
    onClick: () => {},
  },
};
