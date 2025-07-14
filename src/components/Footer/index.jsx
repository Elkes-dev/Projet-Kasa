import Logo_Footer from '../../assets/images/Logo_Footer.png'



function Footer(){


    return(
        <>
        <div className='footer'>
            <img src={Logo_Footer} alt="logo-footer"/>
            <p>© 2020 Kasa. All<br className='line-break-footer'/> rights reserved</p>
        </div>
        </>
    )
}

export default Footer