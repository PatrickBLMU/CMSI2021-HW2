export default function Button({ action }) {
  function getCharacterInfo() {
    let characterNumber = Math.floor(Math.random() * 20);
    action(characterNumber);
  }

  return (
    <button class="holder" onClick={getCharacterInfo}>
      Random Character
    </button>
  );
}
