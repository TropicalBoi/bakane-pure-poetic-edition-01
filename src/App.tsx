import { useState } from "react";
import Home from "./modules/home";
import CrushOptions from "./modules/Crushes";
import TextInput from "./modules/Text";
import About from "./modules/about";

const App = () => {
  const [page, setPage] = useState<string>("");
  const [crush, setCrush] = useState<string>("");

  return (
    <>
      {page === "" && <Home setPage={setPage} />}
      {page === "crushes" && (
        <CrushOptions setPage={setPage} setCrush={setCrush} />
      )}
      {page === "text" && <TextInput crush={crush} setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
    </>
  );
};

export default App;
