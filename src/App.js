

function App() {
  let quote="Don't let yesterday take up too much of today.";
  return (
    <div>
      <center>
      <h1 class="heading">Quote Generator</h1>
      <div class="Quote">
          <div class="Quote-text">
            {quote}
          </div>
        </div>
      <button type="button" class="btn">Generate Quote</button>
      </center>
    </div>
  );
}

export default App;
