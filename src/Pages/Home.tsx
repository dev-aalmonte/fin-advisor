import './Home.scss'

function Home() {

    const toggleOverlay = (e: any) => {
        e.preventDefault();
        document.querySelector('.menu-overlay')?.classList.toggle("active");
    }

    return (
        <div className="Home app-layout">
            <div className="header">
                <h1 className='title'>Finantial Advisor</h1>
                <div className="login-profile" onClick={toggleOverlay}>
                    <img src="https://via.placeholder.com/150" alt="Picture random" className="profile" />
                    <span className="profile-name">Something</span>
                </div>
            </div>
            <div className="side">
                <ul className="navigation">
                    <a href="" className='navigation-link'><li className="navigation-item"><i className="fa-solid fa-phone-volume"></i> Item 1</li></a>
                    <a href="" className='navigation-link'><li className="navigation-item"><i className="fa-solid fa-phone-volume"></i> Item 2</li></a>
                    <a href="" className='navigation-link'><li className="navigation-item"><i className="fa-solid fa-phone-volume"></i> Item 3</li></a>
                    <a href="" className='navigation-link'><li className="navigation-item"><i className="fa-solid fa-phone-volume"></i> Item 4</li></a>
                </ul>
            </div>
            <div className="main">
                <h1>Home Page</h1>
            </div>
            <div className="footer">
                <span>Copyright 2023 by AA Dev. All Rights Reserved.</span>
            </div>
            <div className="menu-overlay active" onClick={toggleOverlay}>
                <div className="menu" onClick={(e) => { e.stopPropagation() }}>
                    <div className="menu-profile">
                        <img src="https://via.placeholder.com/150" alt="Picture random" className="profile" />
                        <span className="profile-name">Something</span>
                    </div>
                    <ul className="menu-list">
                        <a href="" className='menu-link'><li className="menu-item"><i className="fa-solid fa-phone-volume"></i> Item 1</li></a>
                        <a href="" className='menu-link'><li className="menu-item"><i className="fa-solid fa-phone-volume"></i> Item 2</li></a>
                        <a href="" className='menu-link'><li className="menu-item"><i className="fa-solid fa-phone-volume"></i> Item 3</li></a>
                        <a href="" className='menu-link'><li className="menu-item"><i className="fa-solid fa-phone-volume"></i> Item 4</li></a>
                    </ul>
                    <div className="menu-footer">
                        <a href="" className='footer-link'><i className="fa-solid fa-phone-volume"></i></a>
                        <a href="" className='footer-link'><i className="fa-solid fa-phone-volume"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home