import { useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Toolbar from "./components/Toolbar";
import User from "./components/User";



function App() {
    const [id, setId] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
  return (
    <>
        <Toolbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<User id={id} email={email} username={username} name={name}/>} />
        </Routes>
    </>
  );
}

export default App;
