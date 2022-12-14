import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action'

const initialState = {
  VisibilityFilters: VisibilityFilters.SHOW_ALL
  todo: []
}

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      break;
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo;
      })
    default:
      return state
  }
}


function todoApp (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        VisibilityFilters: action.filter
      })
      break;

    case ADD_TODO:
      return Object.assign({}, state, {
        todo: [
          ...state.todo,
          {
            text: action.text,
            completed: false
          }
        ]
      })
      break;
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
      break;
    default:
      return state;
      break;
  }
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}