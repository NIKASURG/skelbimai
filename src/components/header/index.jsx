import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 link-secondary">Skelbimai</a></li>
          <li><a href="/kurtiSkelbima" class="nav-link px-2 link-body-emphasis">Kelti skelbimą</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">Mano skelbimai</a></li>
          <li><a href="#" class="nav-link px-2 link-body-emphasis">Produktai</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Paieška..." aria-label="Paieška"></input>
        </form>

        <button type="button" class="btn btn-outline-primary me-2" onClick={() => window.location.href = '/login'} >Prisijungti</button>
       
        <button type="button" class="btn btn-primary"  onClick={() => window.location.href = '/register'}>Registruotis</button>
      </div>
    </div>
  </header>
  );
}
export default Header;