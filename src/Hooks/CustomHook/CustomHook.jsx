import React, {useState,useEffect} from 'react'
import { useOnlineStatus } from './UseOnline'

const CustomHook = () => {
   const isOnline = useOnlineStatus();
  return (
    <div>
      <h2>Custom Hook</h2>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      <button disabled={!isOnline} >
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
    </div>
  )
}

export default CustomHook
