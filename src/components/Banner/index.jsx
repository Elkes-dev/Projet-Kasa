

function Banner({image, alt, text}){

    return(
        <div className="banner">
            <img src={image} alt={alt} className="banner-img"/>
            {text && <p className="banner-text">{text}</p>}
        </div>
    )
}

export default Banner