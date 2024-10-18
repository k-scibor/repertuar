import React from 'react';
import './MovieList.css';
const akademiaMagiiZdj = "akademia-magii.jpg";
const dzikiRobotZdj = "dziki-robot.jpg";
const jokerZdj = "joker.jpg";
const kulejDwieStronyMedaluZdj = "kulej-dwie-strony-medalu.jpg";
const myNaszeZwierzetaIWojnaZdj = "my-nasze-zwierzeta-i-wojna.jpg";

const MovieList = (props) => (
    <>
        <div className="film">
            {Object.keys(props.tytul).map(
                (e) => (<div key={e} className={e}>
                    {props.tytul[e]}
                </div>)
            )}
        </div>
    </>
);

export default MovieList;