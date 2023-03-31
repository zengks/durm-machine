
import '../components/musicNameDisplay.css'

function MusicNameDisplay({ clipName }) {
  return (
    <div id="display" className='display'>
      <h2>{clipName}</h2>
    </div>
  )
}
export default MusicNameDisplay