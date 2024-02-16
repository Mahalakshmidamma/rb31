import logo from './logo.svg';
import './App.css';
import Counter from './counter';

// function App() {
//   return (
//     <div className="App">
//     <h1>Welcome to Reactapp</h1>
//     <Counter></Counter>
//     <Counter></Counter>
//     <h1>Maha</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
    <h1>Welcome to Reactapp</h1>
    <Counter cname="india" cvaluestarts={10} cinc={5}></Counter>
    <Counter cname="australia" cvaluestarts={200} cinc={12}></Counter>
    <h1>Maha</h1>
    </div>
  );
}

export default App;
