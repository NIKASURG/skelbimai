import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import googleLogin from './googleLogin';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
function Login() {
    function paspaustas(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
    
    
        signInWithEmailAndPassword(auth, formJson.email, formJson.slaptazodis)
          .then((userCredential) => {
            console.log("User logged in:", userCredential.user.email);
            window.location.href = '/'
          })
          .catch((error) => {
            console.error("Error logging in:", error.code, error.message);
              const alert = document.createElement('div');
              alert.className = 'alert alert-danger position-absolute top-0 start-50 translate-middle-x w-100';
              alert.innerHTML = "Neteisingas el. paštas arba slaptažodis";
              document.body.appendChild(alert);
              setTimeout(() => {
                alert.remove();
              }, 3000);
              
    
            });
        ;
      }
    return (
        <main className="form-signin w-100 m-auto border rounded-3 bg-body-tertiary shadow">
            <form onSubmit={paspaustas}>
                <h1 className="h3 mb-3 fw-normal">Prašome prisijungti</h1>

                <div className="form-floating shadow-sm">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email"></input>
                    <label for="floatingInput">El. pašto adresas</label>
                </div>
                <div className="form-floating shadow-sm">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Slaptažodis" name="slaptazodis"></input>
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