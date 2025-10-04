import React, { useState, useEffect } from 'react';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

// Mock project list
const projects = [
  { key: 'prj1', name: 'Project Alpha' },
  { key: 'prj2', name: 'Project Beta' },
  { key: 'prj3', name: 'Project Gamma' }
];

const ADMIN_FLAG_KEY = 'youtrack-admin-flag';

const MainMenuPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(() => {
    const stored = localStorage.getItem(ADMIN_FLAG_KEY);
    return stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem(ADMIN_FLAG_KEY, isAdmin.toString());
  }, [isAdmin]);

  return (
    <div style={{ padding: 20 }}>
      <h2>YouTrack Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.key}>{project.name}</li>
        ))}
      </ul>
      <div style={{ marginTop: 20 }}>
        <Toggle
          checked={isAdmin}
          onChange={event => setIsAdmin(event.target.checked)}
        >
          Admin Mode
        </Toggle>
      </div>
    </div>
  );
};

export default MainMenuPage;
