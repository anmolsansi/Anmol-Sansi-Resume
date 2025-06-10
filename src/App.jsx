// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import TopNav from './components/TopNav';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import { ThemeProvider } from './context/ThemeContext';
//
// function App() {
//   return (
//     <ThemeProvider>
//       <Router basename={process.env.PUBLIC_URL}>
//         <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen p-8 gap-12 items-start">
//           <div className="shrink-0">
//             <Sidebar />
//           </div>
//           <div className="flex-1">
//             <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-full">
//               <TopNav />
//               <div className="mt-9 px-10">
//                   <Routes>
//                     <Route path="/" element={<About />} />
//                     <Route path="/resume" element={<Resume />} />
//                     <Route path="/projects" element={<Projects />} />
//                     <Route path="/contact" element={<Contact />} />
//                   </Routes>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }
//
// export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router basename={process.env.PUBLIC_URL}>
        {/* Full height screen, disable global scroll */}
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 p-8 gap-12">

          {/* Sidebar stays fixed height to its content */}
          <div className="shrink-0">
            <Sidebar />
          </div>

          {/* Main content scrolls independently */}
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 min-h-full">
              <TopNav />
              <div className="mt-9 px-10">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
