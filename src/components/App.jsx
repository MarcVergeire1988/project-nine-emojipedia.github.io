import React from "react";
import Heading from "./Heading";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

/* OR function createEntry(emojiTerm){
    return (
        <Entry 
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
        />
    );
} */

function App() {
  return (
    <div>
      <Heading />

      <dl className="dictionary">
        
       { /* OR {emojipedia.map(createEntry)} */}

       {emojipedia.map(emojiTerm => (
        <Entry 
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            description={emojiTerm.meaning}
        />
       ))}

      </dl>
    </div>
  );
}

export default App;
