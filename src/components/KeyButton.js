import { Button } from 'react-bootstrap'
import '../components/keyButton.css'

function KeyButton({ btnId, whenClicked, soundTrack, value }) {
    return (
        <Button type='button' onClick={() => whenClicked(soundTrack, btnId)} className='drum-pad'>{value}
            <audio className='clip' id={btnId} />
        </Button>
    )
}
export default KeyButton