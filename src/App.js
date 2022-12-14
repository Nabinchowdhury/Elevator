import { useEffect, useRef, useState } from "react";
import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";
import './App.css';
import sound from "./sound/Ding-sound-effect.mp3"

let level1Timeout;
let level2Timeout;
function App() {

  const bellRef = useRef(null)

  const [position, setPosition] = useState("bottom-[20px]")
  const [duration, setDuration] = useState("duration-5000")

  const [level2, setLevel2] = useState(false)
  const [level1, setLevel1] = useState(false)
  const [level0, setLevel0] = useState(true)

  const [stopAtL1, setStopAtL1] = useState(false)
  const [action, setAction] = useState("")

  const bell = () => {
    new Audio(sound).play()
  }


  const stopElevator = () => {
    clearTimeout(level1Timeout)
    clearTimeout(level2Timeout)

    // setPosition("bottom-[308px]")
    console.log("stop elevator at level 1")

  }

  const handleLevel1 = (direction) => {
    setTimeout(() => { bell() }, 5000)

    if (direction) {
      if (stopAtL1) {
        setLevel1(false)
        setPosition("bottom-[596px]")
        setTimeout(() => {
          setLevel2(true)

        }, 5000)
        setStopAtL1(false)
      }
      else if (!stopAtL1) {
        if (action === "up") {
          console.log("wait");
          setStopAtL1(true)
          stopElevator()
        }
      }
    }




    else if (!direction) {
      if (stopAtL1) {
        setLevel1(false)
        setPosition("bottom-[20px]")
        setTimeout(() => {
          setLevel0(true)
        }, 5000)
        setStopAtL1(false)
      }
      else if (!stopAtL1) {
        if (action === "down") {
          console.log("wait");
          setStopAtL1(true)
          stopElevator()
        }
      }
    }


  }

  const handleLevel0 = () => {
    setTimeout(() => { bell() }, 5000)
    setAction("up")
    setLevel0(false)
    // setPosition("bottom-[596px]")
    setPosition("bottom-[308px]")
    setLevel1(true)

    level1Timeout = setTimeout(() => {
      setPosition("bottom-[596px]")
      setLevel1(false)
      // bell()
    }, 5000)

    level2Timeout = setTimeout(() => {
      setLevel2(true)
      bell()
    }, 10000);

    // setTimeout(() => { bell() }, 5000)
  }

  const handleLevel2 = () => {
    setAction("down")
    setLevel2(false)
    setPosition("bottom-[308px]")
    setLevel1(true)

    level1Timeout = setTimeout(() => {
      setPosition("bottom-[20px]")
      setLevel1(false)
      bell()
    }, 5000)

    level2Timeout = setTimeout(() => {
      setLevel0(true)
      bell()
    }, 10000);
  }



  return (
    <div className="App flex flex-col items-center justify-center my-20 relative">

      {/*================== Level 2 ====================== */}
      <div className="flex items-center mr-[100px]">
        <button onClick={() => { handleLevel2() }} disabled={!level2}><TiArrowDownOutline className={`text-6xl mr-10 ${level2 ? "text-black" : "text-gray-400"}`}></TiArrowDownOutline></button>
        <div className='w-72 h-72 border-x-2 border-t-2 border-black bg-gray-300 '>
          <button className='border-black  border-x-2 border-b-2 mx-auto w-24 h-10 bg-white'>Level 2
          </button>
        </div>
      </div>



      {/*================== Level 1 ====================== */}


      <div className="flex items-center mr-[100px]">

        <div className={`flex flex-col ${level1 ? "text-black" : "text-gray-400"}`}>
          <button onClick={() => { handleLevel1(true) }} disabled={!level1}>
            <TiArrowUpOutline className={`text-6xl mr-10 `}></TiArrowUpOutline></button>

          <button onClick={() => { handleLevel1(false) }} disabled={!level1}><TiArrowDownOutline className={`text-6xl mr-10 `}></TiArrowDownOutline></button>
        </div>


        <div className='w-72 h-72 border-2 border-black bg-gray-300 '>
          <button className='border-black  border-x-2 border-b-2 mx-auto w-24 h-10 bg-white'>Level 1
          </button>
        </div>
      </div>


      {/*================== Level 0 ====================== */}

      <div className="flex items-center mr-[100px]">
        <button onClick={() => { handleLevel0() }} disabled={!level0}><TiArrowUpOutline className={`text-6xl mr-10 ${level0 ? "text-black" : "text-gray-400"}`} ></TiArrowUpOutline></button>
        <div className='w-72 h-72 border-x-2 border-b-2 border-black bg-gray-300 '>
          <button className='border-black  border-x-2 border-b-2 mx-auto w-24 h-10 bg-white'>Level 0/GL
          </button>
        </div>
      </div>



      {/*================== Elevator ====================== */}

      <div className={`border-2  w-64 h-56 border-black absolute ${position} ${duration} ease-linear flex justify-center items-center bg-gradient-to-b from-gray-500 to-orange-300`}>
        <button className="px-4 py-1 rounded-md bg-orange-100 border border-orange-300 ">Elevator</button>
      </div>

    </div>
  );
}

export default App;




// if (!stopAtL1) {
//   if (direction) {
//     console.log('up', position);
//     if (action === "down") {
//       return
//     }

//   }
//   else if (!direction) {
//     console.log("down", position)
//     if (action === "up") {
//       return
//     }

//   }

//   else {
    // console.log("wait");
    // setStopAtL1(true)
    // stopElevator()
//     // setStopL1(true)
//     // stopElevator
//   }
// }

// if (direction) {

//   if (stopAtL1) {
//     setLevel1(false)
//     setPosition("bottom-[596px]")
//     setTimeout(() => {
//       setLevel2(true)
//     }, 5000)
//     setStopAtL1(false)
//   }
// }

// else {
//   if (stopAtL1) {
    // setLevel1(false)
    // setPosition("bottom-[20px]")
    // setTimeout(() => {
    //   setLevel0(true)
    // }, 5000)
    // setStopAtL1(false)
//   }
// }