// import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';
import Bookmarks from '../Bookmarks/Bookmarks';
import { useEffect, useState } from 'react';
const Recipes = (() => {

    const [recipes, setRecipes] = useState([])
    
    useEffect(()=>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    } ,[])

    return (
        <div className='pt-5'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold pb-3 text-gray-100'>Our Recipes</h2>
                <p>Recipes are detailed guides that provide step-by-step instructions for preparing dishes. <br /> They list the ingredients needed and explain the cooking techniques involved. Following recipes helps ensure consistent and delicious results in the kitchen.</p>
            </div>
            <div className='flex pt-12'>
                <div className='w-2/3 grid grid-cols-2 gap-6'>
                
                {
                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} ></Recipe>)
                }
                </div>
                <div className='w-1/3'>
                <Bookmarks></Bookmarks>
                </div>
            </div>
        </div>
    );
});

// Recipes.propTypes = {
    
// };

export default Recipes;