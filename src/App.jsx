import './App.css'
import { EventBoard } from './components/EventBoard/EventBoard'
import { GlobalStyle } from './components/GlobalStyle'
import events from '../upcoming-events.json'
import { PageTitle } from './components/PageTitle/PageTitle'


function App() {
  return (
    <>
    <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={events}/>
      <GlobalStyle/>
    </>
  )
}

export default App
