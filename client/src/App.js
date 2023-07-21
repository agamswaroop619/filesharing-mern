import './App.css';
import {useRef, useState, useEffect} from 'react';

function App() {
  const fileInputRef =useRef();
  const  [file, setFile] = useState('');
  const onuploadclick =() =>{
    fileInputRef.current.click();
  }
  useEffect(()=>{
    const getImage = () =>{
      if(file){
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        uploadFile(data);
      }
    }
    getImage();
  },[file])
  return (
    <div className="App">
      <div className="font-cousine w-full min-h-screen bg-blue-400 text-white flex items-center justify-center">
        <div className="bg-gray-700 w-4/5 md:w-[51%] h-auto md:h-4/5 flex flex-col items-center justify-center rounded-full p-8 md:p-8">
          <p className="text-5xl font-bold">Shareify</p>
          <p className="md:text-base text-sm">Share your files with just a link!</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-xl" onClick={() => onuploadclick()}>
            Upload
          </button>
          <input type='file' ref={fileInputRef} className='hidden' onChange={(e) => setFile(e.target.files[0])}></input>
        </div>
      </div>
    </div>
  );
}

export default App;
