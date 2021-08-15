import ReactDOM from "react-dom";

import EventComponent from "./event/EventComponent";
// import UserSearch from "./state/UserSearch";
// import GuestList from "./state/GuestList";

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
