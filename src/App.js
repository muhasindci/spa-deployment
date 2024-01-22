import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Filler from './routes/Filler';
import NotFound from './routes/NotFound';
import Team from './routes/Team';
import Member from './routes/Member';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Filler />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Filler />} />
          <Route path="team" element={<Team />} >
            <Route index element={
              <main style={{ padding: '1rem' }}>
                <h2>Insert Team Picture here</h2>
              </main>
            } />
            <Route path=":memberId" element={<Member />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;