import React, {Component} from 'react'
import '../HomePage/index.css'
import {NavLink} from 'react-router-dom';
import Information from '../HomePage/Information'
import girlbg from '../../img/girl.jpg'
import profimg from '../../img/plant.jpg'
import sign from '../../img/signature.png'
class AboutPage extends Component {
    render() {
        return (
            <div>
                <section
                    class="woods common-section "
                    style={{
                        backgroundImage: `url(${girlbg})`
                    }}>
                    <div class="container ">
                        <h2 class="woods-header common-header ">Amelia Woods</h2>
                        <p class="woods-text common-text ">I am a Graphic & Web Designer based in New
                            York, specializing in User Interface Designer and Development</p>
                    </div>
                </section>
                <Information/>
                <section class="aboutme-section ">
        <div class="img-section about-img ">
            <img src={profimg} alt=" "/>
        </div>
        <div class="about-item ">
            <div class="container ">
                <h2 class="about-header common-header">About me</h2>
                <p class="aboutme-text ">Given let waters air sea had you'll, may seed abuntanty fish. Were you'll earth forth winged above brought. Own darkness they're him can't fourth sea place have.</p>
                <p class="aboutme-text ">So the above May stars cattle fruitful face shall. Tree it, winged. Evry signs male firmament us. Morning him.</p>
                <img src={sign} alt=" " class="sign "/>
            </div>
        </div>
    </section>

                <section className="project">
                    <div className="container">
                        <h3 className="project-header common-header">Need a Project?</h3>
                        <p className="process-text">Let us know what you're looking for in an agency.
                            We'll take a look and see if this could be the start of something beautiful</p>
                        <button type="submit " class="contact-us lets-talk ">
                            <NavLink to="/contact">LET'S TALK</NavLink>
                        </button>

                    </div>
                </section>
            </div>

        )
    }
}
export default AboutPage;