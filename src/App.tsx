import * as React from 'react';
import './App.css';
import AppMenu from './Views/AppMenu';
import Dashboard from './Views/Dashboard';
import DashboardNav from './Views/DashboardNav';

export interface IProps {  
}


class App extends React.Component<IProps, any> {
  public render() {
    return (
      <div className="App">
        <AppMenu/>
        <DashboardNav  />
        <Dashboard  />

      </div>
    );
  }
}

export default App;
