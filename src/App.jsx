import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Acceseries } from './pages/Acceseries'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Project } from './pages/Project'
import { Layout } from './component/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="acceseries" element={<Acceseries />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="project" element={<Project />} />
    </Route>

  
  ),
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
