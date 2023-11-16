import useApiData from '../hooks/useApiData';

export default function MainMenu() {
    
    const apiUrl = 'http://localhost:8000/api/menu/';
    const initialData = {
        "menu": []
    };
     const munuData = useApiData(apiUrl, initialData);
     const slicedMenuData = munuData.menu.length ? munuData.menu.slice(0, 4) : [];
    return (
        <section className="l-section">
        <h2 className="k__small">Меню</h2>
        <div className="container-xl">
            <div className="b__menu_title">
                Попробуй Ирландию на вкус
            </div>
            <div className="b__menu_wrapper">
                <div className="b__menu_innerGrid">
                {slicedMenuData.lenght !== 0 ? slicedMenuData.map((item, index) => (
                    <div className="b__menu_card"
                    style={index === 3 ? { gridColumn: "auto / span 3" } : {}} 
                     key={index}>
                                <div className="b__card_img">
                                    <img src={item.photo} alt={item.name} />
                                </div>
                                <div className="b__card_description">
                                    <div className="b__card_name">
                                        {item.name}
                                    </div>
                                    <div className="b__card_price">
                                        {item.price}р.
                                    </div>
                                </div>
                            </div>
                )) : <></>}
                   
                    <div className="b__menu_card link_to_menu" style={slicedMenuData.lenght === 0 ? {gridColumn: "auto / span 6", height: '440px'} : slicedMenuData.lenght % 4 === 0 ? {gridColumn: "auto / span 3", height: '440px'} : {gridColumn: `auto / span ${(6 - (slicedMenuData.length)*2)}`, height: '440px'} } >
                        <img src="img/btn_full_menu.svg" alt="" />
                        <div className="b__arrow_wrapper">
                            <svg id="menuArrow" width="116" height="73" viewBox="0 0 116 73" fill="none" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
                                <path d="M86.2789 39.1136C87.2552 38.1373 87.2552 36.5544 86.2789 35.5781L70.369 19.6682C69.3927 18.6918 67.8098 18.6918 66.8335 19.6682C65.8572 20.6445 65.8572 22.2274 66.8335 23.2037L80.9756 37.3458L66.8335 51.488C65.8572 52.4643 65.8572 54.0472 66.8335 55.0235C67.8098 55.9998 69.3927 55.9998 70.369 55.0235L86.2789 39.1136ZM0.567383 39.8458L84.5112 39.8458V34.8458L0.567383 34.8458L0.567383 39.8458Z" fill="#FAEEDF"/>
                                <path d="M113.059 36.7907C113.059 55.2578 97.5294 70.3765 78.1867 70.3765C58.844 70.3765 43.3145 55.2578 43.3145 36.7907C43.3145 18.3235 58.844 3.20483 78.1867 3.20483C97.5294 3.20483 113.059 18.3235 113.059 36.7907Z" stroke="#FAEEDF" strokeWidth="5"/>
                                </svg>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn__wrapper d-flex justify-content-between">
                <a className="btn__call_to_action" id="download_menu" href="#booking">Скачать меню</a>
                <a className="btn__call_to_action" id="about_us_btn" href="#booking">Забронировать</a>

            </div>
        </div>
    </section>
    )

}
