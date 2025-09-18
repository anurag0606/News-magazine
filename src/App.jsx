import { useState } from "react";
import Nevbar from "./Components/Nevbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Nevbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
};

export default App;
