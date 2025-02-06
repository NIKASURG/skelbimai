import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import googleLogin from './googleLogin';

function Login() {
    return (
        <main className="form-signin w-100 m-auto border rounded-3 bg-body-tertiary shadow">
            <form>
                <h1 className="h3 mb-3 fw-normal">Prašome prisijungti</h1>

                <div className="form-floating shadow-sm">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label for="floatingInput">El. pašto adresas</label>
                </div>
                <div className="form-floating shadow-sm">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Slaptažodis"></input>
                    <label for="floatingPassword">Slaptažodis</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"></input>
                    <label className="form-check-label" for="flexCheckDefault">
                        Prisiminti mane
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Prisijungti</button>
                <p className="mt-5 mb-3 text-muted">Neturite paskyros? <a href="/register">Registruotis</a></p>

                <p>Arba</p>

                <center>
                    <a href="#" type="button" className="login-with-google-btn bg-body-tertiary text-light-emphasis shadow-sm" onClick={googleLogin}>Prisijungti su Google</a>
                </center>
            </form>
        </main>
    )
    } export default Login;