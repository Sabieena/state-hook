import logo from './logo.svg';
import './App.css';
import HookCounter from './component/HookCounter'
import Counter from './component/Counter';
import ObjectHook from './component/ObjectHook';
import StateArray from './component/StateArray';
import HookEffect from './component/HookEffect';
import HookEffectOne from './component/HookEffectOne';
import HookMouse from './component/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <Counter /> */}
      {/* <ObjectHook /> */}
      {/* <StateArray /> */}
      {/* <HookEffect /> */}
      {/* <HookEffectOne /> */}
      <HookMouse />
    </div>
  );
}

export default App;
