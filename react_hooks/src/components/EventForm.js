import React, { useState, useContext } from 'react'
import {
    CREATE_EVENT,
    DELETE_ALL_EVENT
} from '../actions/index'
import AppContext from '../contexts/AppContext'

const EventForm = () => {
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = () => {
    dispatch({
        type: CREATE_EVENT,
        title,
        body
    })
    setTitle('')
    setBody('')
  }

    const deleteAllEvents = () => {
    const result = window.confirm("本当に全て削除してもいいですか？");
    if (result === true) {
      dispatch({
        type: DELETE_ALL_EVENT,
      })
    } else {
      return state;
    }
  }

  const buttonDisableCreateEvent = () => {
    const disabled = title === '' || body === ''
    return disabled
  }

  const buttonDisableDeleteEvents = () => {
    const disabled = state.length === 0;
    return disabled;
  }
    return (
        <React.Fragment>
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
            <button type="button" className="btn btn-primary" disabled={buttonDisableCreateEvent()} onClick={() => {addEvent()}}>イベント作成</button>
            <button type="button" className="btn btn-danger" disabled={buttonDisableDeleteEvents()} onClick={() => {deleteAllEvents()}}>全てのイベントを削除</button>
        </form>
        </React.Fragment>
    );
}

export default EventForm;









