import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 src 속성",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "텍스트를 입력해주세요.",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메시지",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
    onChange: { action: "changed", description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: { action: "clicked", description: "아이콘 버튼 클릭 이벤트" },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// src 폴더 안에 있을 경우 아래와 같이 가져와야함

// import deleteIcon from "../assets/ic-asset-delete-dark.svg";

// export const Default: Story = {
//   args: {
//     alt: "icon",
//     iconPath: deleteIcon,
//     onClick: () => {},
//   },
// };

export const Default: Story = {
  args: {
    id: "email",
    iconAlt: "icon",
    iconPath: "/icons/ic-public-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
    onChange: () => {},
    onIconClick: () => {},
  },
};
