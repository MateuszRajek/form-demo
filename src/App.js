import { useEffect } from "react";
import "./App.css";
import { updateForm } from "./store/Form/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log();
    dispatch(updateForm("Mateusz"));
  }, []);
  return <div className="App">Test</div>;
}

export default App;

