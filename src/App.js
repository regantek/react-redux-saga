import { useDispatch, useSelector } from "react-redux";
import {
  petDecrement,
  petFavoriteDecrement,
  petFavoriteIncrement,
  petIncrement,
} from "./actions";
import "./App.css";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
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
      <h1>Pet Favorite {petFavorite}</h1>
    </div>
  );
}

export default App;
