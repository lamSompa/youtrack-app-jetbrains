import React, { useState } from 'react';
import List from '@jetbrains/ring-ui/components/list/list';
import Toggle from '@jetbrains/ring-ui/components/toggle/toggle';

const mockProjects = [
  { key: 'prj1', label: 'Project Alpha' },
  { key: 'prj2', label: 'Project Beta' },
  { key: 'prj3', label: 'Project Gamma' },
];

const MainMenuPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h2>YouTrack Projects</h2>
      <List
        data={mockProjects}
        render={({data}) => <span>{data.label}</span>}
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
