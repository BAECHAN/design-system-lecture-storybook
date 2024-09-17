# 인프런 - 스토리북 강좌 따라하기

## 강의 노트 모음

https://www.inflearn.com/notes/62567

## 환경

- StoryBook 8v

## 시작

### 스토리북 서버 열기

`npm run storybook`

### 개발서버 열기

`npm run dev`

![Alt text](public/screenshots/screenshot4.png)

## svg파일 불러오기

svg 파일을 불러오는 방법으로는 총 3가지 방법으로

- public 폴더에 있는 svg 경로로 가져오기 ( ex. public/[...slug].svg )
- src/assets 폴더에 있는 svg 경로로 가져오기 ( ex. src/assets/[...slug].svg )
- 클라우드 서버에 올려둔 svg 경로로 가져오기 ( ex. https:ip/[...slug].svg )

### 1. public 폴더에 있는 svg 경로로 가져오기

![Alt text](public/screenshots/screenshot1.png)

### 2. assets 폴더에 있는 svg 경로로 가져오기

- public처럼 경로를 지정하면 될 줄 알았지만 경로를 찾을 수 없는 상황이 발생함
  ![Alt text](public/screenshots/screenshot2.png)

- 그래서 src폴더 아래에 있는 경우 react component와 같이 굳이 import로 가져와야함
  ![Alt text](public/screenshots/screenshot3.png)

### 3. 클라우드 서버에 올려둔 svg 경로로 가져오기

- 1번( public ) 때와 같이 경로로 가져오면 됩니다.

## 강의에선 설명이 빠져있지만 알아두면 좋을 것들

### <span style="color: orange;">.storybook/main.ts - autodocs</span>

autodocs는 Storybook 구성에서 문서화 자동 생성 기능과 관련된 설정입니다. Storybook에서 문서화는 주로 컴포넌트의 사용 방법, 속성, 상태 등을 설명하는 데 사용됩니다. autodocs 설정을 통해 Storybook은 컴포넌트에 대한 문서를 자동으로 생성하고 관리할 수 있습니다.

autodocs 설정의 값인 "tag"는 문서화 자동 생성 방식 중 하나를 지정합니다. 이 설정이 Storybook의 최신 버전에서 어떻게 작동하는지에 대해 더 자세히 설명하겠습니다.

autodocs: "tag"
목적: autodocs 설정은 Storybook에서 문서화 기능을 자동으로 활성화하고 구성하는 데 사용됩니다.
"tag" 값: 이 값은 컴포넌트의 JSDoc 또는 TypeScript 주석을 기반으로 자동으로 문서를 생성하도록 Storybook에 지시합니다. 즉, 컴포넌트 파일에 있는 주석이나 타입 정의를 기반으로 문서가 자동으로 생성됩니다.
예시
예를 들어, 다음과 같이 TypeScript로 작성된 컴포넌트가 있다고 가정해봅시다.

```tsx
/**

- 버튼 컴포넌트입니다.
-
- @param props - 버튼 컴포넌트의 속성
- @param props.label - 버튼에 표시될 텍스트
- @param props.onClick - 버튼 클릭 시 호출될 함수
*/
const Button = ({ label, onClick }: { label: string; onClick: () => void }) => (
  <button onClick={onClick}>{label}</button>
);
```

위와 같이 컴포넌트 파일에 주석을 달아두면, autodocs: "tag" 설정 덕분에 Storybook은 이 주석을 기반으로 자동으로 문서를 생성합니다.

### pseudo 상태도 라이브러리로 example 등록가능

1. 라이브러리 추가

```bash
npm install storybook-addon-pseudo-states@latest --save-dev
```
2. ./storybook/main.ts 에 코드 추가

```ts
// ./storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    ...,
    'storybook-addon-pseudo-states',
```

3. 스토리에 추가

```ts
// BaseButton.stories.ts

export const Hover: Story = {
  args: {
   ...,
  },
};
Hover.parameters = { pseudo: { hover: true } };
```

4. 스타일은 컴포넌트에서 주면됩니다.
```tsx
// BaseButton.tsx
  const hoverStyle = 'hover:bg-opacity-80';

  return (
    <Button
      className={`${hoverStyle}`}
      {...props}
      disabled={disabled}
    >
      {label}
    </Button>
  );

export default Button;
```

### meta - args 속성

- 해당 속성은 default 값을 지정하는 속성
- 나머지 속성이나 오버라이드 할 속성은 스토리에 작성
  
```ts
const meta: Meta<typeof ToggleFilterTab> = {
 ...,
  args: { onClick: fn(), disabled: false, size: 'medium', option: [
    { label: '전체', value: 'all' },
    { label: '스크랩', value: 'scrap' },
  ] },
} satisfies Meta<typeof ToggleFilterTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
```

### 클릭이벤트 처리 후 콜백함수 처리하는 스토리 추가하기

1. 스토리 파일의 확장자를 tsx로 변경
2. render와 훅을 이용하여 처리
  
```tsx
// EditableTitle.stories.tsx
// 상태를 관리하는 스토리 정의
export const OnSaveTitle: Story = {
  render: (args) => {
    const [title, setTitle] = useState(args.initialTitle);

    const handleSaveTitle = (newTitle: string) => {
      setTitle(newTitle);
    };

    return (
      <EditableTitle
        {...args}
        initialTitle={title}
        onSaveTitle={handleSaveTitle} // 상태 관리
      />
    );
  },
  args: {
    initialTitle: '타이틀',
    size: 'medium',
  },
};
```
### svg파일 이미지 사이즈 조절하는 법

- w-x 또는 h-x로 명시하면 되나, h도 명시하니까 안되서 h-auto로 하고 w만 조정하면 svg가 비율맞춰서 커짐
  
```tsx
const small = 'w-10';
const medium = 'w-16';
const large = 'w-20';

interface IconButtonProps {
  iconPath: string;
  alt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: Size;
}

export default function IconButton({
  iconPath,
  alt,
  onClick,
  size = 'medium',
}: IconButtonProps) {
  const sizeClass: Record<Size, string> = {
    small,
    medium,
    large,
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full p-0 transition-colors duration-300`}
    >
      <img src={iconPath} alt={alt} className={`${sizeClass[size]} h-auto`} />
    </button>
  );
}

```
