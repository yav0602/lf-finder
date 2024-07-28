import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

const FLUENT_THEME_OVERRIDES = {
  background: 'transparent',
};

function App() {
  return (
    <FluentProvider theme={webDarkTheme} style={FLUENT_THEME_OVERRIDES}>
      Hello world
    </FluentProvider>
  );
}

export default App;
