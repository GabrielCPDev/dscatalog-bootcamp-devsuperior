import React from 'react';
import './styles.scss';

const Navbar = () => (
    <nav className="admin-nav-container">
        <ul>
            <li>
                <a className="admin-nav-item active" href="link">Meus Produtos</a>
            </li>
        </ul>
        <ul>
            <li>
                <a className="admin-nav-item" href="link">Minhas Categorias</a>
            </li>
        </ul>
        <ul>
            <li>
                <a className="admin-nav-item" href="link">Meus Usuarios</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;