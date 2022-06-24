import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            SIEU NHAN GAO
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page">
                GAO DO
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blogs" class="nav-link active" aria-current="page">
                GAO XANH
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link active" aria-current="page">
                GAO VANG
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/user/911" class="nav-link active" aria-current="page">
                GAO HONG
              </Link>
            </li>
            <li class="nav-item">
              <Link to="*" class="nav-link active" aria-current="page">
                GAO DEN
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
{
}

export default Layout;
