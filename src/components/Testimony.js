import React from 'react';
import '../stylesheets/Testimony.css';




const Testimony = (props) => {
    return (
        <div className='container-testimony'>
            <img className='image-testimony' src={require(`../images/${props.image}.jpg`)} alt='Foto de Asha' />
            <div className='container-txt-testimony'>
                <p className='name-testimony'>{props.name} </p>
                <p className='nickname'>{props.nickname}</p>
                <p className='txt-testimony'>{props.testimony}</p>
                <div className='valoration'>Valoración:<span className='star'> {props.star}
                </span></div>
            </div>

        </div>
    );
};

export default Testimony;