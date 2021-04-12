import React, {Component} from 'react'
import './index.css'
import client1 from '../../img/client1.png'
import client2 from '../../img/client2.png'
import client3 from '../../img/client3.png'
import client4 from '../../img/client4.png'
import client5 from '../../img/client5.png'

class Client extends Component{
    render(){
        return(
            <section className="client">
                <div className="container">
                    <div className="client-items">
                         <img src={client1} alt="" className="client-img"/>
                         <img src={client2} alt="" className="client-img"/>
                         <img src={client3} alt="" className="client-img"/>
                         <img src={client4} alt="" className="client-img"/>
                         <img src={client5} alt="" className="client-img"/>
                     </div>
                 </div>
            </section>
        )
    }
}

export default Client;