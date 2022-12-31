// import logo from './logo.svg';
import './App.css';
import Users from './users.component';

function App() {

  return (
    <div className="App">
      <header className="App-header" id="myid">
        {/* <h1>Welcome to React</h1>  */}
        <Users title="Page title" />
       
      </header>
    </div>
  );
}

export default App;
