import React, { Suspense, lazy } from 'react';
import './App.css';

const Navbar = lazy(() => import('mfe_header/Navbar'));

function HeaderFallback() {
  return (
    <div className="header-loading">
      Chargement du Header...
    </div>
  );
}

function App() {
  return (
    <div className="shell">
      {/* Affichage du Navbar avec Suspense */}
      <Suspense fallback={<HeaderFallback />}>
        <Navbar notifications={3} />
      </Suspense>

      <main className="shell-content">
        <div className="placeholder">
          <h2>Shell Operationnel</h2>
          <p>Le Header devrait apparaitre au-dessus quand le MFE sera branché.</p>
        </div>
      </main>

      <footer className="shell-footer">
        <p>Shell sur le port 3000 | Header MFE sur le port 3001</p>
      </footer>
    </div>
  );
}

export default App;