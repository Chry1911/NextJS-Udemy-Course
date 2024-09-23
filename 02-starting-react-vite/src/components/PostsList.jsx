import { useState } from 'react';
import NewPost from './NewPost';
import Modal from './Modal';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    const [modalVisible, setModalVisible] = useState(true);
    const [enteredBody, setEnteredBody ] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>  
            {modalVisible ? (
                <Modal onClose={hideModalHandler}>
            
                <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={changeAuthorHandler}
                />
            </Modal>) : false }

            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Ugo" body="I prefer next.js" />
            </ul>
        </>
    );
}

export default PostsList;