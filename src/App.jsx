import { useState } from "react";
export const App = () => {
  const [heading, setheading] = useState("");
  const [notes, setnotes] = useState("");
  const [allNotes, setallNotes] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    setallNotes([...allNotes, { heading, notes }]);
    setheading("");
    setnotes("");
  };
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center gap-10 py-10">
      {/* ===== Form Card ===== */}
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-4 justify-center mb-8">
          <h1 className="font-bold text-4xl">Notes App</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            className="h-12 mt-2"
          />
        </div>

        {/* FORM */}
        <form
          className="flex flex-col gap-5 items-center"
          onSubmit={formHandler}
        >
          <input
            type="text"
            placeholder="Enter Your Notes Heading..!"
            value={heading}
            onChange={(e) => {
              setheading(e.target.value);
            }}
            className="w-72 px-4 py-3 rounded-xl text-white
                       border-2 border-purple-400
                       focus:border-purple-600 focus:ring-2 focus:ring-purple-300
                       outline-none shadow-[0_0_12px_rgba(168,85,247,0.4)]"
          />

          <textarea
            placeholder="Enter Your Notes..!"
            value={notes}
            className="h-32 w-72 px-4 py-3 rounded-xl text-white
                       border-2 border-purple-400
                       focus:border-purple-600 focus:ring-2 focus:ring-purple-300
                       outline-none resize-none shadow-[0_0_12px_rgba(168,85,247,0.4)]"
            onChange={(e) => {
              setnotes(e.target.value);
            }}
          />

          <button
            className="w-72 bg-purple-600 hover:bg-purple-700 
                       py-3 rounded-xl font-semibold transition
                       shadow-[0_0_15px_rgba(168,85,247,0.6)]"
          >
            Save Note
          </button>
        </form>
      </div>

      {/* ===== Notes Display Section ===== */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl w-[22rem]">
        <h2 className="text-xl font-semibold mb-4 text-center">Your Notes</h2>

        <div className="flex flex-col gap-3">
          {allNotes.map((props, index) => {
            return (
              <div
              key={index}
              className="bg-black/40 p-4 rounded-xl border border-purple-400 max-h-40 overflow-y-auto break-words"
            >
              <h3 className="font-medium text-2xl mb-2 break-words">{props.heading}</h3>
              <p className="text-lg text-gray-300 break-words">{props.notes}</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
