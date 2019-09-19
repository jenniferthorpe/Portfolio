import React from 'react';
import "./style/style.css";
import WelcomeHeader from './components/WelcomeHeader';
import ProjectData from "./components/ProjectData";


function App() {
    return (
        <div>

            <WelcomeHeader />
            <ProjectData className="project-content" />
        </div>
    )
}

export default App;