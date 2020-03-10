import React from 'react';
import './App.scss';
import Routes from './routes/Routes';
import TopNav from './navigation/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
			<main className="container">
				<Routes />
			</main>
    </div>
  );
}

export default App;
