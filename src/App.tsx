
import './App.css'
import FormPage from './components/FormPage'
import SecondPage from './components/SecondPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<FormPage/>} />
        <Route path="/second-page" element={<SecondPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
