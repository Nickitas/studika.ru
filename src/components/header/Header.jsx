import { useState } from 'react'

import { CityArrowIcon } from '../../svg.module'

import logo from '../../../public/logo.svg'
import baseClass from '../../index.module.scss'
import classes from './header.module.scss'



const City = ({ toggleCityModal, setToggleCityModal }) => {
    return (
        <div className={classes.city}>
            <div className={classes.toggle} onClick={() => setToggleCityModal(e => !e)}>
                <div className={classes.icon_wrapper}>
                    <CityArrowIcon />
                </div>
                <span>Москва</span>
            </div>

            <div className={`${classes.modal_window} ${toggleCityModal?classes.open:''}`}>
                <div className={classes.search}>
                    <input placeholder='Регион, город, населенный пункт'/>
                </div>
                <div className={classes.selected}>
                    <div className={classes.bage}>
                        <span></span>
                        svgX
                    </div>
                </div>
                <div className={classes.list}>

                </div>
                <div className={classes.button}>
                    сохранить
                </div>
            </div>
        </div>
    )
}
const Search = () => {
    return (
        <div className={classes.search}>
            Search
        </div>
    )
}
const Favorites = () => {
    return (
        <div className={classes.favorites}>
            Favorites
        </div>
    )
}
const ToProfile = () => {
    return (
        <div className={classes.toprofile}>
            to_profile
        </div>
    )
}

const MenuLIst = () => {
    return (
        <div className={classes.menu_list}>
            MenuList
        </div>
    )
}


const Header = () => {

    const [toggleCityModal, setToggleCityModal] = useState(false)



    return (
        <header className={classes.header}>
            <div className={baseClass.container }>
                <div className={classes.row}>
                    <div className={classes.logo}>
                        <img src={logo} alt='logo' />
                    </div>
                    <City 
                        toggleCityModal={toggleCityModal} 
                        setToggleCityModal={setToggleCityModal} 
                    />
                    <Search />
                    <Favorites />
                    <ToProfile />
                </div>
                <MenuLIst />
            </div>
        </header>
    )
}

export default Header