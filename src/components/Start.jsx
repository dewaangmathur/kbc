const Start = ({ setUsername }) => {
  return (
    <div className="start">
      <h2>Choose Your Name:</h2>
      <button className="startButton" onClick={() => setUsername("Princess Ji👸")}>
        Princess
      </button>
      <p className="note">
        OR, WAISE BOTH HEIN JI
      </p>
      <button className="startButton" onClick={() => setUsername("Cutie Ji(˵ •̀ ᴗ - ˵ ) ✧")}>
        Cutie
      </button>
      <p className="note">
        PS: This is not so fast. Just click and wait for the answer to turn red/green, aur mazzze se background music suno 🎶.
        I here means mein
        you- madame ji/hottie ji/ Princess ji/ Cutie ji
      </p>
    </div>
  );
};

export default Start;

