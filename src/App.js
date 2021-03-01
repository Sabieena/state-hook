import logo from './logo.svg';
import './App.css';
import HookCounter from './component/HookCounter'
import Counter from './component/Counter';
import ObjectHook from './component/ObjectHook';
import StateArray from './component/StateArray';
import HookEffect from './component/HookEffect';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <Counter /> */}
      {/* <ObjectHook /> */}
      {/* <StateArray /> */}
      <HookEffect />
    </div>
  );
}

export default App;
