import "./Tamilotchi.scss";
import walkingChick from "../../assets/animations";
import { useEffect, useState } from "react";

function Tamilotchi({ firstMenuClass, secondMenuClass, thirdMenuClass, fourthMenuClass, fifthMenuClass, sixthMenuClass, milo }) {
  const [sprite, setSprite] = useState(0);

  /***
   * Interval needs to be cleaned to avoid lags and gaps in the animation
   * so we need to declare it with no value: <let intervalId;> would also work, the undefined is implied.
   * then we use prevSprite to increment <sprite>
   * (prevState is an implied parameter in anystate, it ensures we use the latest updated value and helps avoid asynchronous behaviors)
   * then we set the interval into intervalId, 500 = 500ms
   * then we clean it to be sure it stays smooth
   */
  useEffect(() => {
    let intervalId = undefined;
    const animateSprite = () => {
      setSprite((prevSprite) => (prevSprite + 1) % walkingChick.length);
    };
    intervalId = setInterval(animateSprite, 500);
    // Cleanup function triggers when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ul className="tamilotchi__buttons">
        <li className={firstMenuClass}>💤</li>
        <li className={secondMenuClass}>🌽</li>
        <li className={thirdMenuClass}>🥚</li>
      </ul>
      <span className="tamilotchi">
        {milo}
        <img
          className="chicken"
          src={walkingChick[sprite].url}
          alt="stardew valley chicken"
        />
      </span>
      <ul className="tamilotchi__buttons">
        <li className={fourthMenuClass}>💪</li>
        <li className={fifthMenuClass}>💕</li>
        <li className={sixthMenuClass}>🎉</li>
      </ul>
    </>
  );
}

export default Tamilotchi;
