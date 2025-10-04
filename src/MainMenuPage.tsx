import React, { useState, useEffect } from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

// Mock project list
const projects = [
  { key: 'prj1', name: 'Project Alpha' },
  { key: 'prj2', name: 'Project Beta' },
  { key: 'prj3', name: 'Project Gamma' }
];

// LocalStorage key for persisting the admin flag
const ADMIN_FLAG_KEY = 'youtrack-admin-flag';

const MainMenuPage: React.FC = () => {
  // Load persisted flag from localStorage
  const [isAdmin, setIsAdmin] = useState(() => {
    const stored = localStorage.getItem(ADMIN_FLAG_KEY);
    return stored === 'true';
  });

  // Persist flag to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(ADMIN_FLAG_KEY, isAdmin.toString());
  }, [isAdmin]);

  return (
    <div style={{ padding: 20 }}>
      <h2>YouTrack Projects</h2>
      <List
        data={projects}
        render={({ data }) => <span>{data.name}</span>}
      />
      <div style={{ marginTop: 20 }}>
        <Toggle
          checked={isAdmin}
          onChange={event => setIsAdmin(event.target.checked)}
          label="Admin Mode"
        />
      </div>
    </div>
  );
};

export default MainMenuPage;
