import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/TabBar.module.css'

console.log(style)

export default function TabBar() {
  return (
    <div className={style.tabbar}>
      <NavLink to="/films" activeClassName={style.active}>
        films
      </NavLink>
      <NavLink to="/cinemas" activeClassName={style.active}>
        cinemas
      </NavLink>
      <NavLink to="/center" activeClassName={style.active}>
        center
      </NavLink>
    </div>
  )
}
