
import PropTypes from 'prop-types';

const Recipe = (({recipe}) => {

    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;

    return (
        <div className='bg-accent-content rounded-xl'>
            <div className=''>
                <img className='rounded-xl ' src={recipe_image} alt="" />
                <div className='px-3'>
                <h4 className='font-bold text-xl py-4'>{recipe_name}</h4>
                <p className=''>{short_description}</p>
                <p className='font-bold py-4 text-lg'>Ingredients: {ingredients.length}</p>
                <p className=''>
                    {
                        ingredients.map((ing, idx) => <span key={idx}><li className='py-1'>{ing}</li></span>)
                    }
                </p>
                <div className='flex py-4 gap-6'>
                    <div className='flex'>
                        <i></i>
                        <p>{preparing_time}</p>
                    </div>
                    <div className='flex'>
                        <i></i>
                        <p>{calories} </p>
                    </div>
                </div>
                <button className='btn btn-success my-6'>Want to Cook</button>
                </div>
            </div>
        </div>
    );
});

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
};

export default Recipe;