import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './MovieList.jsx';
const akademiaMagiiZdj = <img src="src/akademia-magii.jpg"/>;
const dzikiRobotZdj = <img src="src/dziki-robot.jpg"/>;
const jokerZdj = <img src="src/joker.jpg"/>;
const kulejDwieStronyMedaluZdj = <img src="src/kulej-dwie-strony-medalu.jpg"/>;
const myNaszeZwierzetaIWojnaZdj = <img src="src/my-nasze-zwierzeta-i-wojna.jpg"/>;

const lista = [
    { zdjecie: akademiaMagiiZdj, tytul: "Akademia Magii", gatunek: "animowany/przygodowy", czasWys1: "11:20", czasWys2: "17:30" },
    { zdjecie: dzikiRobotZdj, tytul: "Dziki Robot", gatunek: "animowany/przygodowy/familijny", czasWys1: "15:45", czasWys2: "18:00" },
    { zdjecie: jokerZdj, tytul: "Joker: Folie a Deux", gatunek: "dramat/kryminalny", czasWys1: "17:00", czasWys2: "20:00" },
    { zdjecie: kulejDwieStronyMedaluZdj, tytul: "Kulej. Dwie strony medalu", gatunek: "biograficzny", czasWys1: "17:30", czasWys2: "20:15" },
    { zdjecie: myNaszeZwierzetaIWojnaZdj, tytul: "My, nasze zwierzêta i wojna", gatunek: "dokumentalny/dramat", czasWys1: "16:30", czasWys2: "19:00" }
];
const App = () => (
    <div className="app">
    <h1>Repertuar kina</h1>
        {lista.map((d) =>
            <MovieList key={d.tytul} tytul={d} />
        )}
    </div>
);

export default App;
