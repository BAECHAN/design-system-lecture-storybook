import { useState } from "react";
import "./App.css";
import DefaultTextField from "./components/DefaultTextField";
import Label from "./components/Label";
import { Button } from "./components/Button";
import TagList from "./components/TagList";

function App() {
  const [isError, setIsError] = useState<boolean>(false);
  return (
    <>
      <div>
        <h2>DefaultTextField 테스트</h2>
        <Label htmlFor="email">이메일</Label>
        <DefaultTextField
          id="email"
          placeholder="이메일을 입력해주세요."
          value=""
          errorMessage="이메일을 확인해주세요."
          isError={isError}
          iconPath="/icons/ic-public-delete-dark.svg"
          iconAlt="delete"
          onChange={() => {}}
          onIconClick={() => {}}
        />
        <div className="my-20" />
        <Label htmlFor="address">주소</Label>
        <DefaultTextField
          id="address"
          placeholder="주소를 입력해주세요."
          value=""
          errorMessage="주소를 확인해주세요."
          isError={isError}
          iconPath="/icons/ic-public-delete-dark.svg"
          iconAlt="delete"
          onChange={() => {}}
          onIconClick={() => {}}
        />
        <Button
          label={"에러토글"}
          onClick={() => setIsError((prev) => !prev)}
        />
      </div>
      <div>
        <h2>TagList 테스트</h2>
        <div className="bg-primary w-screen">
          <TagList
            tagList={["All", "React", "Typescript"]}
            onTagClick={console.log}
          />
        </div>
      </div>
    </>
  );
}

export default App;
