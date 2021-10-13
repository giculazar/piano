import React,{useState} from "react";
import './App.css';
import {DO,RE,MI,FA,DOF,SOL,SI,LA} from "./piano-notes/piano-notes"


function App() {

    const audioDo = new Audio(DO)
    const audioRe = new Audio(RE)
    const audioMi = new Audio(MI)
    const audioFa = new Audio(FA)
    const audioSol = new Audio(SOL)
    const audioLa = new Audio(LA)
    const audioSi = new Audio(SI)
    const audioDoF = new Audio(DOF)


    const [noteDo,setNoteDo] = useState("")
    const [noteRe,setNoteRe] = useState("")
    const [noteMi,setNoteMi] = useState("")
    const [noteFa,setNoteFa] = useState("")
    const [noteSol,setNoteSol] = useState("")
    const [noteLa,setNoteLa] = useState("")
    const [noteSi,setNoteSi] = useState("")
    const [noteDoF,setNoteDoF] = useState("")


    const bindDo = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteDo(ev.key)
        if (noteDo === ev.key){
            return audioDo.play()
        }
        })
    };

    const bindRe = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteRe(ev.key)
            if (noteRe === ev.key){
                return audioRe.play()
            }
        })
    };

    const bindMi = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteMi(ev.key)
            if (noteMi === ev.key){
                return audioMi.play()
            }
        })
    };

    const bindFa = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteFa(ev.key)
            if (noteFa === ev.key){
                return audioFa.play()
            }
        })
    };

    const bindSol = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteSol(ev.key)
            if (noteSol === ev.key){
                return audioSol.play()
            }
        })
    };

    const bindLa = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteLa(ev.key)
            if (noteLa === ev.key){
                return audioLa.play()
            }
        })
    };

    const bindSi = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteSi(ev.key)
            if (noteSi === ev.key){
                return audioSi.play()
            }
        })
    };

    const bindDoF = () =>{
        window.addEventListener('keydown', function(ev){
            setNoteDoF(ev.key)
            if (noteDoF === ev.key){
                return audioDoF.play()
            }
        })
    };


    return (
    <div className="App">

<div className="piano">
  <button className="piano-notes" onClick={()=>audioDo.play()}>DO</button>
    <button className="piano-notes" onClick={()=>audioRe.play()}>RE</button>
  <button className="piano-notes" onClick={()=>audioMi.play()}>MI</button>
  <button className="piano-notes" onClick={()=>audioFa.play()}>FA</button>
  <button className="piano-notes" onClick={()=>audioSol.play()}>SOL</button>
  <button className="piano-notes" onClick={()=>audioLa.play()}>LA</button>
  <button className="piano-notes" onClick={()=>audioSi.play()}>SI</button>
  <button className="piano-notes" onClick={()=>audioDoF.play()}>DOF</button>
</div>
        <div className="div-plus">
            <button className="plus plus-do" onClick={bindDo}>+</button>
            <button className="plus" onClick={bindRe}>+</button>
            <button className="plus" onClick={bindMi}>+</button>
            <button className="plus" onClick={bindFa}>+</button>
            <button className="plus" onClick={bindSol}>+</button>
            <button className="plus" onClick={bindLa}>+</button>
            <button className="plus" onClick={bindSi}>+</button>
            <button className="plus" onClick={bindDoF}>+</button>
        </div>
        <div className="div-file">
            <button>File Upload</button>
        </div>

    </div>
  );
}

export default App;





// const [plusDo,setPLusDo] = useState("")
//
// window.addEventListener('keydown', function(ev){
//     setPLusDo(ev.key)
// });
//
// const testState = () => {
//     console.log(plusDo) }
// useEffect(
//     window.addEventListener('keydown', function(ev) {
//         setNoteDo(ev.key)
//     }))
