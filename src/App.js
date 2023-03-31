import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import KeyButton from './components/KeyButton';
import MusicNameDisplay from './components/MusicNameDisplay';

import Heater1 from './assets/musicFiles/Heater-1.mp3'
import Heater2 from './assets/musicFiles/Heater-2.mp3'
import Heater3 from './assets/musicFiles/Heater-3.mp3'
import Heater4 from './assets/musicFiles/Heater-4_1.mp3'
import Clap from './assets/musicFiles/Heater-6.mp3'
import OpenHH from './assets/musicFiles/Dsc_Oh.mp3'
import KickNHat from './assets/musicFiles/Kick_n_Hat.mp3'
import Kick from './assets/musicFiles/RP4_KICK_1.mp3'
import ClosedHH from './assets/musicFiles/Cev_H2.mp3'

import './App.css'
import { useState } from 'react';

function App() {

  const [clipName, setClipName] = useState('')

  const playSound = (soundTrack) => {
    const sound = new Audio(soundTrack)
    sound.play()
  }

  const handleClick = (soundTrack, clipName) => {
    setClipName(clipName)
    playSound(soundTrack)
  }

  const handleKeyPressed = (keyPressed) => {
    switch (keyPressed) {
      case 'q':
        setClipName('Heater 1')
        playSound(Heater1)
        break
      case 'w':
        setClipName('Heater 2')
        playSound(Heater2)
        break
      case 'e':
        setClipName('Heater 3')
        playSound(Heater3)
        break
      case 'a':
        setClipName('Heater 4')
        playSound(Heater4)
        break
      case 's':
        setClipName('Clap')
        playSound(Clap)
        break
      case 'd':
        setClipName('OpenHH')
        playSound(OpenHH)
        break
      case 'z':
        setClipName('KickNHat')
        playSound(KickNHat)
        break
      case 'x':
        setClipName('Kick')
        playSound(Kick)
        break
      case 'c':
        setClipName('ClosedHH')
        playSound(ClosedHH)
        break
      default:
        setClipName('')
        return
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeyPressed((e.key).toLocaleLowerCase())
  })

  return (
    <Container id='drum-machine' className='border border-2 border-primary container'>
      <Row className='d-flex justify-content-evenly align-items-center'>
        <Col md={5}>
          <Row>
            <Col><KeyButton btnId='Heater 1' whenClicked={handleClick} soundTrack={Heater1} value='Q' /></Col>
            <Col><KeyButton btnId='Heater 2' whenClicked={handleClick} soundTrack={Heater2} value='W' /></Col>
            <Col><KeyButton btnId='Heater 3' whenClicked={handleClick} soundTrack={Heater3} value='E' /></Col>
          </Row>
          <Row>
            <Col><KeyButton btnId='Heater 4' whenClicked={handleClick} soundTrack={Heater4} value='A' /></Col>
            <Col><KeyButton btnId='Clap' whenClicked={handleClick} soundTrack={Clap} value='S' /></Col>
            <Col><KeyButton btnId='OpenHH' whenClicked={handleClick} soundTrack={OpenHH} value='D' /></Col>
          </Row>
          <Row>
            <Col><KeyButton btnId='KickNHat' whenClicked={handleClick} soundTrack={KickNHat} value='Z' /></Col>
            <Col><KeyButton btnId='Kick' whenClicked={handleClick} soundTrack={Kick} value='X' /></Col>
            <Col><KeyButton btnId='ClosedHH' whenClicked={handleClick} soundTrack={ClosedHH} value='C' /></Col>
          </Row>
        </Col>
        <Col md={2}>
          <MusicNameDisplay clipName={clipName} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
