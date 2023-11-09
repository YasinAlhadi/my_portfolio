import './navbar.css'
import  { useState } from 'react'

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  const navbarClass = navbar ? 'navbar active' : 'navbar';

  return (
    <>
    <div className={navbarClass}>
        <div className='navbar__logo'><a href='#hero'><img src='yasin.png' /></a></div>
        <div className='navbar__links'>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#contact'>Contact</a>
        </div>
    <div className="social_links">
    <a href='#'><img src="/github.png" alt="GitHub" width={30} height={30} /></a>
    <a href='#'><img src="/linkedin.png" alt="Linkedin" width={30} height={30} /></a>
    <a href='#'><img src="/x_twitter.png" alt="X" width={30} height={30} /></a>
    <a href='#'><img src="/youtube.png" alt="Youtube" width={30} height={30} /></a>
</div>
    </div>
{/* <div className="card">
  <a className="social-link" href="#">
  <img src="/github.png" alt="GitHub" width={30} height={30} />
  </a>
  <a className="social-link" href="#">
    <img src="/linkedin.png" alt="Linkedin" width={30} height={30} />
  </a>
  <a className="social-link" href="#">
    <img src="/x_twitter.png" alt="Linkedin" width={30} height={30} />
  </a>
  <a className="social-link" href="#">
  <img src="/youtube.png" alt="Linkedin" width={30} height={30} />
  </a>
</div> */}
</>
  )
}

export default Navbar;
