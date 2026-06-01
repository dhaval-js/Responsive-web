import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="site-header">
      <h1 className="site-logo">Dhaval</h1>

      <nav className="site-nav">
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/">
          Home
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/acceseries">
          Acceseries
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/project">
          Project
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/contact">
          Contact
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/about">
          About
        </NavLink>
      </nav>
    </header>
  )
}
