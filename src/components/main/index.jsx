import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CardComponent from '../card';

function Home() {
    const [page, setPage] = useState(1);
    const cardsPerPage = 10;
    const totalCards = 200;
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    const cardArray = Array.from({ length: totalCards }, (_, i) => <CardComponent key={i} />);
    const currentCards = cardArray.slice((page - 1) * cardsPerPage, page * cardsPerPage);

    return (
        <div>
            <div className="d-flex flex-wrap justify-content-center gap-5 p-3">
                {currentCards}
            </div>
            <div className="d-flex justify-content-center mt-3 ">
                <button className="btn btn-primary bg-body text-body-emphasis fs-4" disabled={page === 1} onClick={() => setPage(page - 1)}> &laquo;</button>
                <span style={{ margin: '0 10px' }}>Puslapis {page} iš {totalPages}</span>
                <button className="btn btn-primary bg-body text-body-emphasis fs-4" disabled={page === totalPages} onClick={() => setPage(page + 1)}>&raquo;</button>
            </div>
        </div>
    );
} 

export default Home;
