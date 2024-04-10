// Write your code here
import React, {useState} from 'react'
import {UnlockContainer, Image, Text, Button} from './styledComponents'
import lockImg from '../../assets/lock-img.png'
import unlockImg from '../../assets/unlock-img.png'

const Unlock = () => {
  const [locked, setLocked] = useState(true)

  const toggleLock = () => {
    setLocked(prevState => !prevState)
  }

  return (
    <UnlockContainer>
      <Image
        src={locked ? lockImg : unlockImg}
        alt={locked ? 'lock' : 'unlock'}
      />
      <Text>Your Device is {locked ? 'Locked' : 'Unlocked'}</Text>
      <Button onClick={toggleLock}>{locked ? 'Unlock' : 'Lock'}</Button>
    </UnlockContainer>
  )
}

export default Unlock
