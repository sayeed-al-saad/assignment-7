
import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = (({bookmarks}) => {

    return (
        <div>
            <div className='bg-accent-content p-5 rounded-lg'>
                <h2>Want to Cook : {bookmarks.length} </h2>
                <div className='flex justify-between'>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                </div>
                <div>
                    {
                        bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
});

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;