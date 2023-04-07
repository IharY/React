import {useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    /*мы знаем что массив useState возвращает массив из двух объектов*/
    // const [likes, setLikes] = useState(0);
    // const [value, setValue] = useState('Заголовок')

    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScrip', body: 'Description'},
        {id: 2, title: 'JavaScrip', body: 'Description'},
        {id: 3, title: 'JavaScrip', body: 'Description'},
        {id: 4, title: 'JavaScrip', body: 'Description'},
        {id: 5, title: 'JavaScrip', body: 'Description'}
    ]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
        console.log(newPost);
    }
    
    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />

                <MyInput
                    value = {body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />

                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1"/>
        </div>
  );
}

export default App;
