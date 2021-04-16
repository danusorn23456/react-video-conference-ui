
import React, { useRef, useState } from 'react';
import avatar from './img/avatar.jpeg';

function App() {

  const inputRef = useRef({});

  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isMicroPhoneMute, setIsMicrophoneMute] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [messageList,setMessageList] = useState([
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    }, {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'me',
      name:'danusorn',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
    {
      target:'friend',
      name:'duriya',
      time:'1 min ago',
      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu'
    },
  ])

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    console.log('full screen ', isFullScreen)
  }

  const toggleIsMicroPhoneMute = () => {
    setIsMicrophoneMute(!isMicroPhoneMute);
    console.log('microphone mute ', isMicroPhoneMute)
  }

  const toggleIsCameraOpen = () => {
    setIsCameraOpen(!isCameraOpen);
    console.log('camera open ', isCameraOpen)
  }

  const messageSender = (e) =>{
    e.preventDefault();
    let newMessage = {
      target:'me',
      name:'danusorn',
      time:'1min ago',
      text:inputRef.current.value
    }
    setMessageList([newMessage,...messageList]);
    inputRef.current.value = "";
    console.log('message send :)')
  }

  return (
    <div className="h-screen w-full relative flex">
      {/* vdio screen */}
      <div className={`group ${isFullScreen ? 'mmd:w-full mmd:h-full z-10' : 'w-[120px] h-[160px] md:w-[50%] xl:w-[70%]'} top-0 right-0 md:h-full absolute md:relative pointer-events-none`}>
        {/* remote video */}
        <div className={`absolute ${isFullScreen ? 'mmd:w-full mmd:h-full' : 'w-[120px] h-[160px] mmd:group-hover:w-[240px] mmd:group-hover:h-[320px]'} shadow-xl timing right-0 md:w-full md:h-full bg-gray-800 pointer-events-auto cursor-pointer`}>
          {/* actions */}
          <div className={`absolute bottom-0 left-0 flex w-full ${isFullScreen ? 'scale-100':'mmd:scale-0'} justify-center p-4 md:p-8 space-x-2 md:space-x-4 transform mmd:group-hover:scale-100`}>
            {/* action : full screen */}
            <button className="w-10 h-10 md:hidden md:w-14 md:h-14 bg-white rounded-full p-2 grid place-content-center" onClick={toggleFullScreen}>
              {isFullScreen
                ?
                (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z" /></svg>)
                : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="black" d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path>
                </svg>)
              }
            </button>
            {/* action : camera */}
            <button className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full p-2 grid place-content-center" onClick={toggleIsCameraOpen}>
              {isCameraOpen
                ?
                (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4l2-2zm3 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg>)
                :
                (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414L19.586 21zM7.556 8.97a6 6 0 0 0 8.475 8.475l-1.417-1.417a4 4 0 0 1-5.642-5.642L7.555 8.97zM22 17.785l-4.045-4.045a6 6 0 0 0-6.695-6.695L8.106 3.892 9 3h6l2 2h4a1 1 0 0 1 1 1v11.786zm-8.492-8.492a4.013 4.013 0 0 1 2.198 2.198l-2.198-2.198z"></path></svg>)
              }
            </button>
            {/* action : leave call */}
            <button className="w-10 h-10 md:w-14 md:h-14 bg-red-600 rounded-full p-2 grid place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="white" d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"></path></svg>
            </button>
            {/* action : mic */}
            <button className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full p-2 grid place-content-center" onClick={toggleIsMicroPhoneMute}>
              {
                isMicroPhoneMute
                  ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 1a5 5 0 0 1 5 5v4a5 5 0 0 1-10 0V6a5 5 0 0 1 5-5zM3.055 11H5.07a7.002 7.002 0 0 0 13.858 0h2.016A9.004 9.004 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11z" /></svg>)
                  : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="black" d="M16.425 17.839A8.941 8.941 0 0 1 13 18.945V23h-2v-4.055A9.004 9.004 0 0 1 3.055 11H5.07a7.002 7.002 0 0 0 9.87 5.354l-1.551-1.55A5 5 0 0 1 7 10V8.414L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-4.767-4.768zm2.95-2.679l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.95 8.95 0 0 1-1.57 4.16zm-2.91-2.909l-8.78-8.78A5 5 0 0 1 17 6l.001 4a4.98 4.98 0 0 1-.534 2.251z"></path></svg>)
              }
            </button>
          </div>
        </div>
        {/* local vdio */}
        <div className={`group absolute ${isFullScreen ? 'w-[240px] h-[320px]' : ' w-[60px] h-[80px] mmd:group-hover:w-[120px] mmd:group-hover:h-[160px]'} timing md:w-[360px] md:h-[220px] xl:w-[440px] xl:h-[300px] right-0 rop-0 bg-black pointer-events-auto cursor-pointer`}></div>
      </div>
      <div className="w-full h-full md:w-[50%] xl:w-[30%] flex flex-col">
        {/* friend info */}
        <div className="h-[80px] w-full border items-center flex px-4 space-x-4">
          <figure className="w-[56px] h-[56px] border rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={avatar} />
          </figure>
          <span className="text-gray-800 select-none cursor-pointer">Duriya Cheoun-sa-ngoun</span>
        </div>
        {/* message scroll*/}
        <div className="flex-1 custome-scroll-bar overflow-y-scroll flex flex-col-reverse space-y-4 p-4">
          {
            messageList.map((current, index) => (
            <div key={index} className={`flex ${current.target === "me" ? 'flex-row-reverse' : 'flex-row' } items-end space-x-2`}>
              {
                current.target !== "me"
                ?(<figure className="w-10 h-10 rounded-full border overflow-hidden">
                    <img className="w-gull h-full object-cover" src={avatar}/>
                  </figure>)
                :null
              }
              <span className="max-w-[50%] space-y-1 flex flex-col">
                <div className="border font-light p-2 rounded-br-md bg-blue-500 text-white break-words">
                  this is {messageList.length - index} message <br/>
                  {current.text}
                </div>
                <div className={`flex ${current.target === "me" ? 'justify-end' :'justify-start'}`}>
                  <span className="font-light text-xs text-gray-400 inline-block">{current.time}</span>
                </div>
              </span>
            </div>))
          }
        </div>
        {/* message input */}
        <div className="h-[60px] w-full border flex items-center px-4">
          <form className="flex w-full items-center space-x-2" onSubmit={messageSender}>
            <label className="flex-1">
              <input ref={inputRef} type="text" placeholder="message here" className="border p-2 w-full focus:border-gray-200 focus:bg-gray-100" />
            </label>
            {/* file upload */}
            <label className="relative p-md grid place-content-center bg-blue-600 active:bg-blue-400 border rounded-full w-[40px] h-[40px] flex-shrink-0 p-2">
              <input type="file" className="absolute cursor-pointer opacity-0 w-full h-full top-0 left-0" />
              <svg xmlns="http://www.w3.org/2000/svg" className="pr-0.5" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"></path><path fill="white" d="M5 11.1l2-2 5.5 5.5 3.5-3.5 3 3V5H5v6.1zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            </label>
            {/* message sender */}
            <button type="submit" className="p-md bg-blue-600 active:bg-blue-400 border grid place-content-center rounded-full w-[40px] h-[40px] flex-shrink-0 p-2 pl-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="white" d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
