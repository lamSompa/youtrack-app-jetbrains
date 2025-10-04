import React, { useState, useEffect } from 'react';
import Panel from '@jetbrains/ring-ui/components/panel/panel';
import Island from '@jetbrains/ring-ui/components/island/island';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

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
    <div style={{ background: '#f5f6fa', minHeight: '100vh', padding: '40px' }}>
      <Panel>
        <Island>
          <h2 style={{ marginBottom: 16, color: '#2d2f31' }}>YouTrack Projects</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            {projects.map(project => (
              <li key={project.key} style={{ fontSize: 18, color: '#1a73e8' }}>
                {project.name}
              </li>
            ))}
          </ul>
          <div style={{ marginBottom: 24 }}>
            <Toggle
              checked={isAdmin}
              onChange={event => setIsAdmin(event.target.checked)}
            >
              <span style={{ fontWeight: 500, color: '#2d2f31' }}>Admin Mode</span>
            </Toggle>
          </div>
        </Island>
        <footer style={{ marginTop: 40, textAlign: 'center', color: '#888' }}>
          © 2025 Abeiku Sompa Nyarko-Lartey
        </footer>
      </Panel>
    </div>
  );
};

export default MainMenuPage;
