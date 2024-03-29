import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <b><p>Calories : {calories}</p></b>
            <img className={style.image} src={image} alt=''></img>
        </div>
    );
};

export default Recipe;