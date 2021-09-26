import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import MainTemplate from './component/templates/MainTemplate';
import CoursesView from './views/CoursesView';

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainTemplate>
        <CoursesView />
      </MainTemplate>
    </div>
  );
}

export default App;
