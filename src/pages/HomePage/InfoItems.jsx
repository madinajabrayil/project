import React, {Component} from 'react'
import './index.css'
import diamond from '../../img/diamond.png'
import arc from '../../img/arc.png'
import phone from '../../img/phone.png'
import plane from '../../img/plane.png'
import star from '../../img/star.png'

class InfoItems extends Component{
    render(){
        return(
            <section className="section-items">
            <div className="container">
                <div className="flex-container">
    
                    <div className="item">
                        <img className="item-img" src={diamond} alt=""/>
                        <h3 className="item-head">ui/ux design</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={arc} alt=""/>
                        <h3 className="item-head">web development</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={phone} alt=""/>
                        <h3 className="item-head">app mobile</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={plane} alt=""/>
                        <h3 className="item-head">seo / marketing</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
    
                    <div className="item">
                        <img className="item-img" src={plane} alt=""/>
                        <h3 className="item-head">web development</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={star} alt=""/>
                        <h3 className="item-head">photography</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={diamond} alt=""/>
                        <h3 className="item-head">ui/ux design</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
                    <div className="item">
                        <img className="item-img" src={phone} alt=""/>
                        <h3 className="item-head">mobile development</h3>
                        <p className="item-text">Be set fourth land god darkness make it wherein own</p>
                    </div>
    
                </div>
            </div>
        </section>
    
        )
    }
}

export default InfoItems;