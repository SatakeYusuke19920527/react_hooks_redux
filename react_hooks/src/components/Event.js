import React, { useContext } from 'react';
import {DELETE_EVENT} from '../actions/index';
import AppContext from '../contexts/AppContext';

const Event = ({ event }) => {
    const {dispatch} = useContext(AppContext)
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`id=[${event.id}] を削除してもいいですか？`);
        if (result === true) {
            dispatch({
                type: DELETE_EVENT,
                id
            })
        }
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => { handleClickDeleteButton() }}
                >削除</button>
            </td>
        </tr>
    );
}

export default Event;
