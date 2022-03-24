import './App.css';

function App() {
  const date = new Date()
  return (
    <div>
      <h1>{date.toTimeString()}</h1>
    </div>
  );
}

export default App;
