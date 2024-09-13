import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
    return <ul className={classes.posts}>
        <Post author="Christian" body="React is perfect" />
        <Post author="Ugo" body="I prefer next.js" />
    </ul>
}

export default PostsList;