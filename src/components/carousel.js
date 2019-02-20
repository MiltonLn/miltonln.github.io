import React from 'react'


export const PicturesCarousel = ({title, pictures}) => {
    return <div id={`carousel-pictures-${title}`} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            {pictures.map((_, index) =>
                <li key={index}
                    data-target={`#carousel-pictures-${title}`}
                    data-slide-to={index}
                    className={index === 0 ? "active" : ""}>
                </li>
            )}
        </ol>
        <div className="carousel-inner">
            {pictures.map((pic, index) =>
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={pic}>
                    <img className="d-block w-100" src={pic} alt="First slide" />
                </div>
            )}
        </div>
        <a className="carousel-control-prev" href={`#carousel-pictures-${title}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true">
                <i className="fas fa-angle-left fa-5x" style={{color: 'lightgray'}}></i>
            </span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#carousel-pictures-${title}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true">
                <i className="fas fa-angle-right fa-5x" style={{ color: 'lightgray' }}></i>
            </span>
            <span className="sr-only">Next</span>
        </a>
    </div>
}