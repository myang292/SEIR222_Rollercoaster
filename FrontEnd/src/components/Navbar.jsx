import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='parks'>Parks</Link>
            </nav>
        </header>
    )
}

export default Navbar