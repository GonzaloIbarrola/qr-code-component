import './App.css'
import Image from './components/Image';
import Body from './components/Body';
import Heading from './components/Heading';

function App() {
  return (
    <div className="bg-white w-card flex flex-col gap-4 h-card p-4 rounded-[20px] shadow-card">
      <Image />
      <Heading />
      <Body />
    </div>
  )
}

export default App;
