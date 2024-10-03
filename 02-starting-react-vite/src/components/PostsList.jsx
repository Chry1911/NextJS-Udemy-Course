import { useState } from 'react';
import NewPost from './NewPost';
import Modal from './Modal';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
   
    const [enteredBody, setEnteredBody ] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');


    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>  
            {isPosting && (
                <Modal onClose={onStopPosting}>
            
                <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={changeAuthorHandler}
                onCancel={onStopPosting}
                />
            </Modal>)}

            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Ugo" body="I prefer next.js" />
            </ul>
        </>
    );
}

export default PostsList;