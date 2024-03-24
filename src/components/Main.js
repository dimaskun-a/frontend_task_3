import React from "react";
import Hello from "./Hello";



/**
 * Membuat Component Main
 */
function Main() {
  return (
    <div>
      <main>
        <Hello name="sinka" />
        <Hello name="freya" />
        <Hello name="zee" />
        <Hello name="shani" />
        <Hello name="naomi" />
      </main>
    </div>
  );
}

// export Component Main
export default Main;