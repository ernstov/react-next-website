export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_APP_VALUES':
      return {
        ...state,
        ...action.data
      }
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.data
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.data.isLoading,
        nextPage: action.data.nextPage
      }
    case 'INCREASE_OFFSET':
      return {
        ...state,
        [`${action.data.name}Offset`]: state.isDataLoading ? state[`${action.data.name}Offset`] : state[`${action.data.name}Offset`] ? state[`${action.data.name}Offset`] + 1 : 1,
        currentData: action.data.name,
        currentType: action.data.type,
        isOffset:false,
      }

    case 'ADD_LOADED_DATA':
      return {
        ...state,
        dataPosts: { ...state.dataPosts, [action.data.name]: [...state.dataPosts[action.data.name], ...action.data.content] },
        currentData: null,
        currentType: null,
        isDataLoading: false,
      }

    case 'RELOAD_DATA':
      return {
        ...state,
        dataPosts: { ...state.dataPosts, [action.data.name]: [...action.data.content] },
        currentData: null,
        currentType: null,
        isDataLoading: false,
      }

    case "CLEAR_LAST_UPDATED":
      return {
        ...state,
        headlinesUpdated: 1
      }

    case "INCREASE_LAST_UPDATED":
      return {
        ...state,
        headlinesUpdated: state.headlinesUpdated + 1
      }

    case "SET_OFFSET":
      return {
        ...state,
        currentData: action.data.currentData,
        offset: action.data.offset,
        isOffset: true,
      }

    default:
      return state;
  }
}