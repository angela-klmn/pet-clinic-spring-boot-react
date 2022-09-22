import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Overlay from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AuthContext from "../context/AuthProvider";
import { useContext } from "react";
import {Image} from "react-bootstrap";
import profile from '../images/profile.jpg';


function ProfilePic() {

    const { auth } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            You are logged in as: {auth.user}
        </Tooltip>
    );

    return (
        <Overlay
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <Image style={{width: '50px', height: '50px'}} src={profile} roundedCircle />
        </Overlay>
    );
}

export default ProfilePic;