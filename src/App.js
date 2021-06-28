import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  petDecrement,
  petFavoriteDecrement,
  petFavoriteIncrement,
  petIncrement,
} from "./actions";
import "./App.css";

function App() {
  // const petCounter = useSelector((state) => state.petCounter);
  // const petFavorite = useSelector((state) => state.petFavorite);
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="App">
      {/* <h1>Welcome to React Redux Crash Course 2021</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove Pet</button>
      <h1>Pet Counter {petCounter}</h1>
      <hr />
      <button onClick={() => dispatch(petFavoriteIncrement(3))}>
        Add Favorite Pet
      </button>
      <button onClick={() => dispatch(petFavoriteDecrement())}>
        Remove Favorite Pet
      </button>
      <h1>Pet Favorite {petFavorite}</h1> */}

      <h1>Welcome to React Redux Saga Crash Course</h1>
      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

export default App;
