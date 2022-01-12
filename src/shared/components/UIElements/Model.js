import React from 'react';
import { CSSTransition } from 'react-transition-group'
import ReactDom from 'react-dom';

import Backdrop from './BackDrop';

import './Model.css';

const ModelOverLay = props => {
    const content = (
        <div className={`model ${props.className}`} style={props.style}>
            <div className={`model__header ${props.headerClass}`} style={props.headerStyle}> <h2>{props.header}</h2></div>
            <form onSubmit= {props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`model__content ${props.contentClass}`}> {props.children}</div>
                <footer className={`model__footer ${props.footerClass}`}>{props.footer}</footer>
            </form>
        </div>
    );
    
    
    return ReactDom.createPortal(content,document.getElementById('model-hook'));
}

const Model = props => {

    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition in={props.show} unmountOnExit mountOnEnter timeout={200} classNames='model'>
                <ModelOverLay {...props} />
            </CSSTransition>

        </React.Fragment>
    )
}

export default Model;