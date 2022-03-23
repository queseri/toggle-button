import { useState } from 'react'
import ThemeImgMoon from './images/icon-moon.svg'
import ThemeImgSun from './images/icon-sun.svg'
import './App.css';

function App() {
  const [theme, setTheme] = useState(false)

  function themeControl() {
    setTheme(!theme)
  }
  return (
    <div className="App">
      <button className='btn btn-theme-control' aria-pressed={theme} onClick={themeControl}>
        <span className='sr-only'>{"light theme"}</span>
        <img className={`light-theme-img ${theme ? "hide-theme-img" : ""}`} src={ThemeImgMoon} alt="" />
        <img className={`dark-theme-img ${theme ? "" : "hide-theme-img"}`} src={ThemeImgSun} alt="" />
      </button>
    </div>
  );
}

export default App;
