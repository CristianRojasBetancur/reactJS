import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render(){
        return(
            <div className="Footer">
                <p>Copyright © 2020 | Medellín, Antioquia, Colombia <FontAwesomeIcon icon={faGithub}/> | <FontAwesomeIcon icon={faFacebook}/> | <FontAwesomeIcon icon={faTwitter}/> |</p>
            </div>
        )
    }
}

export default Footer