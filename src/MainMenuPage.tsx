import React from 'react';
import Button from '@jetbrains/ring-ui/components/button/button';

const MainMenuPage: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>YouTrack Projects</h2>
      {/* Project list will go here */}
      <Button>Toggle admin flag (coming soon)</Button>
    </div>
  );
};

export default MainMenuPage;
