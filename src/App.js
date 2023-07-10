import './App.css';
import { Container } from 'reactstrap';
import { ThemeContext, themes } from './contexts/ThemeContext';
import React from 'react';
import ToggleDark from './components/toggleDark';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">Dark/Light mode</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>

      <footer className="center footer">
        <Container>
            Nigth Mode Toggle Button
        </Container>
      </footer>
    </div>
  );
}

export default App;
