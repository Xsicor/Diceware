import './GeneratedWord.css';

function GeneratedWord(props) {
  return (
    <div className='GeneratedWord'>
      <h1>
        {props.word}
      </h1>
      <h2>
        {props.id}
      </h2>
    </div>
  )
}

export default GeneratedWord;