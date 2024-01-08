import { useEffect, useLayoutEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteProcess } from './RouteProcess'

function App() {

  //Device types
  const largeDevice = 1200 //Anthing bigger than 1200px will be rendered as a Desktop
  //Anthing smaller than 1200px but bigger than 900px will be rendered as a Medium sized devices like tablet or laptop
  const smallDevice = 900 //Anthing smaller than 900px will be rendered as a Mobile Device

  //Stores device details to aid in styling
  const [device, setDevice] = useState({type: "", width: window.innerWidth, height: window.innerHeight})

  //Update device.height and device.width 
  function windowDimChange(){
    if(device.width !== window.innerWidth || device.height !== window.innerHeight) {
      setDevice(prevDevice => ({
        ...prevDevice,
        width: window.innerWidth,
        height: window.innerHeight
      }))
    }
  }

  useLayoutEffect(() => {
    addEventListener("resize", () => { 
      console.log("Window size changed")
      windowDimChange() 
    })
  }, [])

  useEffect(() => {

    //Update device.type from updated details
    const currentType = device.width > largeDevice ? "large" : largeDevice > device.width && device.width > smallDevice ? "medium" : "small"
    if(device.type !== currentType){
      setDevice(prevDevice => ({
        ...prevDevice,
        type: currentType
      }))
    }

  }, [device])

  //routesData stores page data, each entry in the array points to a individual page.
  const routesData = [
    {path: "/", element: <>Home</>},
    {path: "*", element: <>404</>}
  ]

  return (
    <>
      <Routes>
        {routesData.map((route, i) => ( 
          <Route path={route.path} element={<RouteProcess key={i} path={route.path} element={route.element} device={device}  />}/>
        ))}
      </Routes>
    </>
  )
}

export default App
