import React, { Component } from 'react'
import styles from './BurgerConstructor.module.css'
import data from '../../utils/data'; 
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'


export default class BurgerConstructor extends Component {

  render() {
    return (
      <>
        <section className='mt-25'>
            <div className='ml-25 mr-25' >
                <div className='mb-2'>
                  <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                <div style={{display: 'flex', alignItems: 'center'}}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text="Соус традиционный галактический"
                    price={30}
                    thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                  />
                </div>

                <div style={{display: 'flex', alignItems: 'center'}}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text="Мясо бессмертных моллюсков Protostomia"
                    price={300}
                    thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                  />
                </div>

                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text="Плоды Фалленианского дерева"
                      price={80}
                      thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                    />
                  </div>

                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text="Хрустящие минеральные кольца"
                      price={80}
                      thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                    />
                  </div>

                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text="Хрустящие минеральные кольца"
                      price={80}
                      thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                    />
                  </div>
                </div>

                <div className='mt-2'>
                  <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={20}
                    thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                  />
                </div>
              
                <div className='mt-4 mb-4' style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center'}} className='mr-10'><p className="text text_type_digits-medium mr-1">610</p><CurrencyIcon type="primary" /></div>
                  <Button htmlType="button" type="primary" size="large">
                  Оформить заказ
                  </Button>
                </div>
            </div>
        </section>
      </>
    )
  }
}
