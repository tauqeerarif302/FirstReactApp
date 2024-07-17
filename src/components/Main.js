import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <>
        <h1 className="mx-2">This is Home component</h1>
        <Link className="mx-2 btn btn-link" to="/login" >Click here to Login</Link>
        <Link className="mx-5 btn btn-link" to="/register" >Click here to Register</Link>
        </>
    )
}