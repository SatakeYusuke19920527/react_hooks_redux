import React from 'react';
import Event from './Event';

const Events = ({state, dispatch}) => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}

export default Events;