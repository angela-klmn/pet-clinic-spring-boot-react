import "../../css/card.css"

const DeveloperInfo = () => {
    return(
        <ul className="cards">
            <li>
                <div className="card">
                    <img src="https://thumbs.dreamstime.com/b/female-programmer-person-icon-vector-illustration-167291602.jpg" className="card__image" alt=""/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt=""/>
                            <div className="card__header-text">
                                <h3 className="card__title">Angéla Kelemen</h3>
                            </div>
                        </div>
                        <p className="card__description">Description</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src="https://community.envri-fair.eu/wp-content/uploads/2016/08/software-developer-copy-1024x1024.jpg" className="card__image" alt=""/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt=""/>
                            <div className="card__header-text">
                                <h3 className="card__title">Kristóf Minczér</h3>
                            </div>
                        </div>
                        <p className="card__description">Description</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="card">
                    <img src="https://community.envri-fair.eu/wp-content/uploads/2016/08/software-developer-copy-1024x1024.jpg" className="card__image" alt=""/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                <path/>
                            </svg>
                            <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt=""/>
                            <div className="card__header-text">
                                <h3 className="card__title">Domonkos Wangler</h3>
                            </div>
                        </div>
                        <p className="card__description">Description</p>
                    </div>
                </div>
            </li>
        </ul>)
}

export default DeveloperInfo;