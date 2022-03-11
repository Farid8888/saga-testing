import TitleForm from './components/TitleForm';
import Posts from './components/Posts';
import {useSelector} from 'react-redux'
import './App.css';


function App() {
  const noPosts = useSelector(state=>state.syncPosts.posts)
  console.log(noPosts)
  return (
    <div className="App">
      {noPosts && <input className="noPosts" value={noPosts} readOnly/>}
    <TitleForm/>
    <Posts/>
    </div>
  );
}

export default App;
