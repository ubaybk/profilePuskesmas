import { useRoutes } from 'react-router-dom'
import { routes } from './Route'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const element = useRoutes(routes)

  return element
}

export default App
