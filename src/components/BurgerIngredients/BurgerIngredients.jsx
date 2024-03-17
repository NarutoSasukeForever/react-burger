import React, { Component } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngredients.module.css'
import data from '../../utils/data'; 


export default class BurgerIngredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'one'
    };
  }

  setCurrent = (value) => {
    this.setState({ current: value });
  }

  render() {
    const { current } = this.state;
    const mainItems = data.filter(item => item.type === "bun");
    const SauceItems = data.filter(item => item.type === "sauce");

    return (
      <>
      <main className={styles.container}> 
        <section className='mb-10 mt-10'>
          <h1 className="text_type_main-large mb-5">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
              <Tab value="one" active={current === 'one'} onClick={() => this.setCurrent('one')}>
                Булки
              </Tab>
              <Tab value="two" active={current === 'two'} onClick={() => this.setCurrent('two')}>
                Соусы
              </Tab>
              <Tab value="three" active={current === 'three'} onClick={() => this.setCurrent('three')}>
                Начинки
              </Tab>
            </div>
        </section>

        <section className='mb-10'>
          <h1 className="text_type_main-medium mb-6">Булки</h1>
          <div style={{ display: 'flex' }} className='ml-4 mr-6'>
          
            <div style={{position: 'relative'}}>
              <img src="https://code.s3.yandex.net/react/code/bun-02.png" alt='булка' className="ml-4 mr-4"/>
              <Counter count={1} size="default" extraClass="m-1" />
              <div className={styles.price}><p className="text text_type_digits-default mr-1">1255</p><CurrencyIcon type="primary"/></div>
              <div><p className="text text_type_main-default">Краторная булка N-200i</p></div>
            </div>

            <div>
              <img src="https://code.s3.yandex.net/react/code/bun-01.png" alt='булка' className="ml-4 mr-4"/>
              <div className={styles.price}><p className="text text_type_digits-default mr-1">1255</p><CurrencyIcon type="primary"/></div>
              <div><p className="text text_type_main-default">Флюоресцентная булка R2-D3</p></div>
            </div>
          
          </div>
        </section>
        
        <section>
          <h1 className="text_type_main-medium mb-6">Соусы</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} className='ml-4 mr-6'>
              {SauceItems.map((item, index) => (
                index % 2 === 0 && (
                  <div key={item._id} style={{ display: 'flex', marginRight: '20px' }}>
                    <div>
                      <img src={item.image} alt={item.name} className="ml-4 mr-4"/>
                      <div className={styles.price}>
                        <p className="text text_type_digits-default mr-1">{item.price}</p><CurrencyIcon type="primary"/>
                      </div>
                      <div><p className="text text_type_main-default" style={{display:'flex', justifyContent: 'center'}}>{item.name}</p></div>
                    </div>
                    {SauceItems[index + 1] && (
                      <div>
                        <img src={SauceItems[index + 1].image} alt={SauceItems[index + 1].name} className="ml-4 mr-4"/>
                        <div className={styles.price}>
                          <p className="text text_type_digits-default">{SauceItems[index + 1].price}<CurrencyIcon type="primary"/></p>
                        </div>
                        <div><p className="text text_type_main-default" style={{display:'flex', justifyContent: 'center'}}>{SauceItems[index + 1].name}</p></div>
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
        </section>
      </main>
      </>
    )
  }
}
