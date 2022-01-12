import React,{ useState,useContext } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from '../../shared/components/UIElements/Button'
import './PlaceListItem.css';
import Model from "../../shared/components/UIElements/Model";
import Map from "../../shared/components/UIElements/Map";

import { AuthContext } from "../../shared/context/auth-context";

const PlaceListItem = props => {
    const auth = useContext(AuthContext);
    const [showMap,setMapState] = useState(false);
    const [showConfirm,setShowConfirm] = useState(false);


    const showDeleteHandler = () => setShowConfirm(true);
    const cancelDeleteHandler = () => setShowConfirm(false);
    const confirmDeleteHandler = () => {
        console.log('Deleting...');
        cancelDeleteHandler();
    }

    const showMapHandler = () => setMapState(true);
    const hideMapHandler = () => setMapState(false);
    return (
        <React.Fragment>
            <Model 
                show={showMap} 
                onCancel={hideMapHandler}
                header={props.address}
                contentClass='place-item__model-content'
                footerClass='place-item__model-actions'
                footer={<Button onClick={hideMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <Map location={props.location} style={{height: '15rem',width : '100%' }}/>
                </div>
            </Model>
            <Model 
                show={showConfirm}
                onCancel={cancelDeleteHandler}
                header='Are you sure??' 
                headerStyle={{background:'red'}}
                footerClass='place-item__modal-actions' 
                footer={
                <React.Fragment>
                    <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                    <Button danger onClick={confirmDeleteHandler}>DELETE!</Button>
                </React.Fragment>
            }>
                <p>Are you sure you wanna this place? Plz note that it can't be undone </p>
            </Model>

            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={showMapHandler}>Veiw On Map</Button>
                        {auth.isLoggedIn &&  <Button to={`/place/${props.id}`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
}

export default PlaceListItem;