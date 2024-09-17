//ROUTER
import { Link } from 'react-router-dom'

//CSS
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h2>
            <Link to="/">Memories</Link>
        </h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/add-memory">Adicionar Memória</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar