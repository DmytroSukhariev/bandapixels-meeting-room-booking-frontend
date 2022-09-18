import './App.css';
import './index.css';
import { MainPage } from './pages/MainPage';
import {MyCalendar} from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <style>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
            rel='stylesheet'
        />
      </style>
      <MainPage />
     < MyCalendar/>
    </div>
  );

}

export default App;
