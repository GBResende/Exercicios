import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className='App'>
      {Task('Hello Gabriel')} 
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return {Task('Hello Gabriel')};
//   }
// }

export default App;
