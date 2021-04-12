import React,{Component} from 'react'
import '../HomePage/index.css'
import Form from '../HomePage/Form'
import map from '../../img/map.png'

class ContactPage extends Component{
    render(){
        return(
            <section className="contact-section">
            <div className="container">
                <div className="flex">
                    <div className="contact-info">
                        <h3 className="contact-header common-header">Contact Info:</h3>
                        <p className="contact-text ">To give begining divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subude. Life days creature upon first heaven gathering dry.</p>
                        <p className="commun"><span className="colorbl">Address:</span> 10111 Santa Monica Boulevard, LA </p>
                        <p className="commun"><span className="colorbl">Phone:</span> +44 948 848 383 </p>
                        <p className="commun"><span className="colorbl">Email:</span> info@example.com</p>
                        <p className="commun"><span className="colorbl">Fax:</span> +44 575 858 483</p>
                    </div>
                        <Form/>
                </div>
                <img src={map} className="map" alt=""/>
            </div>
        </section>
        )
    }
}
export default ContactPage;