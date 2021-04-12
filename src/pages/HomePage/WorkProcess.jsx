import React, {Component} from 'react'
import './index.css'
import playbtn from '../../img/play-button.png'
import videoimg from '../../img/videoimg.jpg'
// import 'react-fancybox/lib/fancybox.css'

class WorkProcess extends Component {
    render() {
        return (
            <section className="process">
                <div className="container">
                    <h2 className="process-header common-header">our work process</h2>
                    <p className="process-text">Was years it seasons was there form he in them
                        together over that, third sixth gathered female creeping bearing behold years.</p>
                    <div className="video">
                        <a
                            data-fancybox="data-fancybox"
                            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                            <img className="card-img-top video-img img-fluid" src={videoimg}/>
                            <img src={playbtn} alt="" className="play-button"/>
                        </a>
                    </div>

                </div>
            </section>
        )
    }
}

export default WorkProcess;