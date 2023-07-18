import './App.css';
import {useRef} from 'react';

function App() {
  const fileInputRef =useRef();
  const onuploadclick =() =>{
    fileInputRef.current.click();
  }
  return (
    <div className="App">
      <div className="font-cousine w-full min-h-screen bg-blue-400 text-white flex items-center justify-center">
        <div className="bg-gray-700 w-4/5 md:w-[51%] h-auto md:h-4/5 flex flex-col items-center justify-center rounded-full p-8 md:p-8">
          <p className="text-5xl font-bold">Shareify</p>
          <p className="md:text-base text-sm">Share your files with just a link!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => onuploadclick()}>
            Upload
          </button>
          <input type='file' ref={fileInputRef} className='hidden'></input>
        </div>
      </div>
    </div>
  );
}

export default App;
