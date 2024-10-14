import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="banner">
                <div className='flex flex-col items-center pt-52 space-y-3'>
                <h2 className='text-5xl font-bold text-center text-gray-100'>Discover an exceptional cooking <br /> class tailored for you!</h2>
                <p className='text-center text-gray-100'>Cooking is the process of preparing food by combining ingredients, applying heat, and following recipes to create <br /> delicious meals. It involves various techniques and practical activity.</p>
                <div className='flex gap-8 pt-10'> 
                    <button className="btn btn-success">Explore Now</button>
                    <button className="btn btn-outline btn-success">Our Feedback</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;