import { Fragment } from 'react';
import { CoreWebElement } from '@abhisek507/react-core-web-element';
import './App.css'


function App() {
  return (
    <Fragment>
      <CoreWebElement
        header={{
          visible: true,
          heading: 'Header',
        }}
        nav={{
          visible: true,
          title: 'Nav',
        }}
        content={{
          visible: true,
          title: 'Content',
        }}
        sidebar={{
          visible: true,
          title: 'Sidebar',
        }}
      />
    </Fragment>
  );
}

export default App;
