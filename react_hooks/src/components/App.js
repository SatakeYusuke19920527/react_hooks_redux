import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
  <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Email address</label>
          <input type="email" className="form-control" id="formEventTitle" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">Body</label>
          <textarea type="password" className="form-control" id="formEventTitle"/>
        </div>

        <button type="button" className="btn btn-primary">イベント作成</button>
        <button type="button" className="btn btn-danger">全てのイベントを削除</button>

      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">タイトル</th>
            <th scope="col">ボディー</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="1">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App
