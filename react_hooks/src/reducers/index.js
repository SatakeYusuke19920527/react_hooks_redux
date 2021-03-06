
/**
 * 
 * action = {
 *  type:'CREATE_EVENT',
 *  title:'2020年オリンプック'
 *  body:'オリンピックを開催します。'
 * }
 * 
 * #before
 * state=[]
 * 
 * #after
 * state=[
 *  {id:1, title:'タイトル1', body:'ボディー１'},
 *  {id:2, title:'タイトル1', body:'ボディー１'},
 *  {id:3, title:'タイトル1', body:'ボディー１'}
 * ]
 * 
 * 
 */
const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body };
            const length = state.length;
            let id = length === 0 ? 1 : state[length-1].id + 1
            return [...state, {id, ...event}]
        case 'DELETE_EVENT':
            return state.filter(event => event.id !== action.id);
        case 'DELETE_ALL_EVENT':
            return [];
        default:
            return state;
    }
}

export default events;