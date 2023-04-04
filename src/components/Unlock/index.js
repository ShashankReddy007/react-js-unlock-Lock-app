// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  LockImage,
  Text,
  StatusText,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  return (
    <MainContainer>
      {lock ? (
        <LockImage
          alt="lock"
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        />
      ) : (
        <LockImage
          alt="unlock"
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        />
      )}

      <Text>
        Your Device is{' '}
        {lock ? (
          <StatusText>Locked</StatusText>
        ) : (
          <StatusText>UnLocked</StatusText>
        )}
      </Text>
      <Button onClick={() => setLock(prevState => !prevState)}>
        {lock ? (
          <StatusText>Locked</StatusText>
        ) : (
          <StatusText>UnLocked</StatusText>
        )}
      </Button>
    </MainContainer>
  )
}

export default Unlock
