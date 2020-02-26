import React, {useReducer, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';
import reducer from '../reducers/index';

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const addEvent = () => {

    dispatch({
        type: 'CREATE_EVENT',
        title,
        body
    })
    
    setTitle('')
    setBody('')
  }

  const deleteAll = () => {
    dispatch({
        type: 'DELETE_ALL_EVENT',
    })
  }

  return (
  <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Email address</label>
          <input type="email" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">Body</label>
          <textarea type="password" className="form-control" id="formEventTitle" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button type="button" className="btn btn-primary" onClick={() => {addEvent()}}>イベント作成</button>
        <button type="button" className="btn btn-danger" onClick={() => {deleteAll()}}>全てのイベントを削除</button>

      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディー</th>
            <th scope="col">削除</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App
