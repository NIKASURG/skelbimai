import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { miestai } from '../../data/miestai';
import { useState } from 'react';

const miestaiArray = miestai.split('|');

function AddSkelbima() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files);
    };

    return (
        <div className="container py-5">
            <div className="card p-4 p-md-5 border-0 shadow-lg rounded-3">
                <div className="row g-4">
                    {/* Left Column */}
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="text"
                                name="pavadinimas"
                                className="form-control form-control-lg"
                                placeholder=" "
                                required
                            />
                            <label>Pavadinimas *</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="number"
                                name="kaina"
                                className="form-control form-control-lg"
                                placeholder=" "
                                required
                            />
                            <label>Kaina (€) *</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                name="aprasymas"
                                className="form-control form-control-lg"
                                placeholder=" "
                                style={{ height: '120px' }}
                                required
                            ></textarea>
                            <label>Detalus aprašymas *</label>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6">
                        <div className="form-floating">
                            <select
                                name="miestas"
                                className="form-select form-select-lg"
                                required
                            >
                                <option value=""></option>
                                {miestaiArray.map((miestas, index) => (
                                    <option key={index} value={miestas}>
                                        {miestas}
                                    </option>
                                ))}
                            </select>
                            <label>Miestas *</label>
                        </div>
                    </div>

                    
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input
                                type="tel"
                                name="telefonas"
                                className="form-control form-control-lg"
                                placeholder=" "
                                pattern="[0-9]{9}"
                                required
                            />
                            <label>Telefono numeris (9 skaitmenys) *</label>
                        </div>
                    </div>

               
                    {/* File Upload Section */}
                    <div className="col-12">
                        <div className="file-upload-card p-3 border rounded-3">
                            <label className="form-label fw-bold mb-3">Nuotraukos *</label>
                            <div className="input-group">
                                <input
                                    type="file"
                                    name="nuotraukos"
                                    className="form-control form-control-lg"
                                    multiple
                                    onChange={handleFileChange}
                                    required
                                />
                                <span className="input-group-text">
                                    <i className="bi bi-cloud-upload fs-4"></i>
                                </span>
                            </div>
                            {selectedFiles.length > 0 && (
                                <div className="mt-3 p-2 bg-light rounded-2">
                                    <small className="text-muted">Pasirinktos nuotraukos:</small>
                                    <div className="d-flex flex-wrap gap-2 mt-2">
                                        {Array.from(selectedFiles).map((file, index) => (
                                            <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                                                <i className="bi bi-file-image me-2"></i>{file.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-center mt-4">
                        <button className="btn btn-primary btn-lg px-5 py-3 fs-5 rounded-2">
                            <i className="bi bi-plus-circle me-2"></i>Paskelbti skelbimą
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSkelbima;