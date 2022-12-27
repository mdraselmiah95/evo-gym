import React, { useState } from "react";
import Navbar from "@/scenes/navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;

//=> 1:04:00 video
