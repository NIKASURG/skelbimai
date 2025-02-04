import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
function Register() {
    return (
        <main className="form-signin w-100 m-auto border rounded-3 bg-body-tertiary shadow">
            <form className='p-3 mb-5 rounded d-grid gap-2 rounded'>
                <h1 className="h3 mb-3 fw-normal">Registracija</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">El. pašto adresas</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="vardas" placeholder="Vardas"></input>
                    <label for="vardas">Vardas</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Slaptažodis"></input>
                    <label for="floatingPassword">Slaptažodis</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Sutinku su <a href="taisykles">taisyklėmis</a>
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2 shadow" type="submit">Registruotis</button>
             
                <p className="mt-5 mb-3 text-muted">Jau turite paskyrą? <a href="/login">Prisijungti</a></p>
            </form>
        </main>
    )
} export default Register;