

function Banner({image, alt}){

    return(
        <div className="banner">
            <img src={image} alt={alt} className="banner-img"/>
            <p className="banner-text">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner