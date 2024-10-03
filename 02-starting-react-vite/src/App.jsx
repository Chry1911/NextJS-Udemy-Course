import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalVisible} 
          onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
