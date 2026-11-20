import { Outlet } from 'react-router';
import Navigation from '../components/Navigation';

export default function RootLayout() {
  return (
    <div className="layout">
      <header className="header">
        <span className="logo">Мій блог</span>
        <Navigation />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">© 2026 Мій блог</footer>
    </div>
  );
}