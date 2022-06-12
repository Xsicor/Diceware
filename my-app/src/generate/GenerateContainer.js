import "./GenerateContainer.css";
import GeneratedWord from "./GeneratedWord";
import wordList from "data/wordList.json";

function GenerateContainer(props) {
  const loopNum = [...Array(props.rollNum).keys()];
  const generatedWords = loopNum.map((i) => {
    const [word, id] = generateWordAndId();
    return {
      word: capitalizeFirstLetter(word),
      id: id
    }
  })
  const password = generatedWords.map(word => word.word).join('')

  return (
    <div className="generateContainer">
      <div className="rollResults">
        {loopNum.map((i) => {
          return <GeneratedWord word={generatedWords[i].word} id={generatedWords[i].id} />;
        })}
      </div>
      <div className="password">
        <h1>
          The generated password is: <br/>
          {password}
        </h1>
      </div>
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateWordAndId() {
  let key = "";
  key += getRandomInt(6);
  key += getRandomInt(6);
  key += getRandomInt(6);
  key += getRandomInt(6);
  key += getRandomInt(6);
  return [wordList[key], key];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

export default GenerateContainer;
