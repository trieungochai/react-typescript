import ReactDOM from "react-dom";

import UserSearch from "./refs/UserSearch";
// import EventComponent from "./event/EventComponent";
// import UserSearch from "./state/UserSearch";
// import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
