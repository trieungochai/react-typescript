import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      Hello Cowboy
    </ChildAsFC>
  );
};

export default Parent;
