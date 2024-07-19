import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                    <a className="navbar-brand col-lg-3 me-0" href="/">Reciepe App.</a>
                    <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        

                    </ul>
                    <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                        <Link to="/login" className="btn btn-primary mx-2">Login</Link>
                        <Link to="/register" className="btn btn-primary ">Register</Link>
                    </div>

                    
                </div>
            </div>
        </nav>
    )
}