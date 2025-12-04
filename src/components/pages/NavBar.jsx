import "../../styles/NavBar.css";

const NavBar = () => {

    return (

    <> 
     <nav className="navbar ">
        <div className="logo-video-container">
           <video className="logo-video" autoplay loop muted playsinline>
                <source  src="/dibuSuperSayayinCancherosreRePower.mp4" type="video/mp4" autoPlay muted loop playsinline></source>
                 Tu navegador no soporta video.
            </video>
        </div>
        <div className="nav-buttons">
            <button className="btn btn-login">Iniciar sesión</button>
            <button className="btn btn-reserve">Reservar canchas</button>
        </div>
    </nav>
    </>
    )
  }

  export default NavBar;
