import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='parks'>Parks</Link>
                <Link to='rides/top3/speed'>TOP 3 SPEED</Link>
                <Link to='new'>→ Add Park</Link>
            </nav>
        </header>
    )
}

export default Navbar