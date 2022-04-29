import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import Posts from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  const { userName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Redux-Toolkit + React-Hook-Form + React-Query</h1>
      {/* <b>user: </b>
      <span>
        {userName ? (
          <>
            {userName}
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          "Guest"
        )}
      </span>{" "}
      <Login />
      <hr />
      <Counter />
      <hr /> */}
      <Posts />
      <AddPostForm />
      {/* <hr />
      <Register /> */}
    </div>
  );
}

export default App;
