import './navbar.css'

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='navbar__logo'>Yasin Alhadi</div>
        <div className='navbar__links'>
            <a href='#projects'>Projects</a>
            <a href='#skills'>Skills</a>
            <a href='#experience'>Experience</a>
            <a href='#education'>Education</a>
            <a href='#contact'>Contact</a>
        </div>
    </div>
    {/* <div className="social_links">
    <a href='#'><img src="/github.png" alt="GitHub" width={30} height={30} /></a>
    <a href='#'><img src="/linkedin.png" alt="Linkedin" width={30} height={30} /></a>
    <a href='#'><img src="/x_twitter.png" alt="X" width={30} height={30} /></a>
    <a href='#'><img src="/youtube.png" alt="Youtube" width={30} height={30} /></a>
</div> */}
<div className="card">
  <span>Social</span>
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
</div>
</>
  )
}
