import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { auth } from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useState } from 'react';
function Register() {
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
        if (!formJson.vardas || formJson.vardas.trim() === "") {
          // alert("Prašome įvesti savo vardą!");
          const alert = document.createElement('div');
          alert.className = 'alert alert-danger';
          alert.innerHTML = "Prašome įvesti savo vardą!";
          document.body.appendChild(alert);
          setTimeout(() => {
            alert.remove();
          }, 3000);
          return;
        }
    
        createUserWithEmailAndPassword(auth, formJson.email, formJson.slaptazodis)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: formJson.vardas
            }).catch((error) => {
              console.error("Error updating profile:", error.code, error.message);
            });
            // console.log("User registered:", userCredential.user);
          }).then((user) => {
            window.location.href = '/home'
    
    
          })
          .catch((error) => {
            console.error("Error registering user:", error.code, error.message);
            const alert = document.createElement('div');
            alert.className = 'alert alert-danger';
            const tekstas = error.code === "auth/weak-password" ? " Slaptažodi turi sudaryti bent  6 simboliai" : "Toks el. paštas jau užregistruotas";
           
            alert.innerHTML = tekstas;
            document.body.appendChild(alert);
            setTimeout(() => {
              alert.remove();
            }, 3000);
          });}
    const [praleisti, sutinka] = useState(false)
    return (
        <main className="form-signin w-100 m-auto border rounded-3 bg-body-tertiary shadow">
            <form className='p-3 mb-5 rounded d-grid gap-2 rounded' onSubmit={paspaustas}>
                <h1 className="h3 mb-3 fw-normal">Registracija</h1>

                <div className="form-floating">
                    <input type="email"  name="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                    <label htmlFor="floatingInput">El. pašto adresas</label>
                </div>
                <div className="form-floating">
                    <input type="text"  name="vardas" className="form-control" id="vardas" placeholder="Vardas"></input>
                    <label htmlFor="vardas">Vardas</label>
                </div>
                <div className="form-floating">
                    <input type="password" name="slaptazodis" className="form-control" id="floatingPassword" placeholder="Slaptažodis"></input>
                    <label htmlFor="floatingPassword">Slaptažodis</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" onChange={() => sutinka(!praleisti)}></input>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Sutinku su <a href="taisykles">taisyklėmis</a>
                    </label>
                </div>
                <button className="btn btn-primary w-100 py-2 shadow" disabled={!praleisti} type="submit">Registruotis</button>
             
                <p className="mt-5 mb-3 text-muted">Jau turite paskyrą? <a href="/login">Prisijungti</a></p>
            </form>
        </main>
    )
} export default Register;