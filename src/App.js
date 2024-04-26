import './App.css';
// import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <TodoApp />
    </div>
  );
}

// function PlayingWithProps(properties){
//   console.log(properties.property1);
//   return(
//     <div>
//         props
//     </div>
//   )
// }

// function PlayingWithProps({property1,property2}){
//   console.log(property1);
//   console.log(property2);
//   return(
//     <div>
//         Props
//     </div>
//   )
// }

export default App;
