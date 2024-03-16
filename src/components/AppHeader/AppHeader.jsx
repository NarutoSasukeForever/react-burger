import React, { Component } from 'react'
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './AppHeader.module.css'

export default class AppHeader extends Component {
  render() {
    return (
      <>
        <header className="p-4" style={{ backgroundColor: '#1c1c21'}}>
          <nav>
            <ul>
               <div className="ml-5 mr-5" style={{ display: 'flex'}}>
                <li className="mr-8"><a>
                  <BurgerIcon type="primary"/>
                  <p className="text text_type_main-default text_color_active ml-2" >Конструктор</p>
                  </a>
                </li>

                <li> <a><ListIcon type="secondary" />
                  <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
                  </a>
                </li>
              </div>

              <li><a>
              <Logo /></a>
              </li>

              <li className="ml-5 mr-5 mb-5 mt-5"><a><ProfileIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p></a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    )
  }
}
