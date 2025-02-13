import { CoreWebElement } from '@abhisek507/react-core-web-element';

const elementConfig = {
  header: {
    visible: true,
    heading: 'Header',
  },
  nav: {
    visible: true,
    title: 'Nav',
  },
  content: {
    visible: true,
    title: 'Content',
  },
  sidebar: {
    visible: true,
    title: 'Sidebar',
  },
};

function App() {
  return (
    <CoreWebElement {...elementConfig} />
  );
}

export default App;
