export const initialStore=()=>{
  return{
    message: null,
    profile: (localStorage.getItem("token") ? 
    {
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token")
    } : null
  ),
    register: {},

    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
      
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_profile':
      return {
        ...store,
        profile: action.payload
      };
    
      case 'set_register':
        return {
          ...store,
          register: action.payload
        }


    default:
      throw Error('Unknown action.');
  }    
}
