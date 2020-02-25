import {
  GET_CONVERSATION,
  GET_CONVERSATION_ERROR,
  GET_CONVERSATION_SUCCESS,
  SET_CONVERSATION_STATUS,
  ADD_CONVERSATION,
  UPDATE_CONVERSATION,
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  ALL_MESSAGES_LOADED,
  GET_MORE_MESSAGES,
  GET_MORE_MESSAGES_SUCCESS,
  GET_MORE_MESSAGES_ERROR,
  SET_CONVERSATION,
} from '../constants/actions';

const initialState = {
  isFetching: false,
  isFetchingMore: false,
  isAllMessagesLoaded: false,
  conversationStatus: 'Open',
  data: [],
  allMessages: [],
  selectedConversationId: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONVERSATION: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case GET_CONVERSATION_ERROR: {
      return {
        ...initialState,
        isFetching: false,
      };
    }

    case GET_CONVERSATION_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    }

    case ADD_CONVERSATION: {
      return {
        ...state,
        data: {
          meta: state.data.meta,
          payload: [action.payload, ...state.data.payload],
        },
      };
    }
    case UPDATE_CONVERSATION:
      return {
        ...state,
        data: {
          meta: state.data.meta,
          payload: action.payload,
        },
      };

    case SET_CONVERSATION_STATUS:
      return {
        ...state,
        conversationStatus: action.payload,
      };

    case SET_CONVERSATION:
      return {
        ...state,
        selectedConversationId: action.payload,
      };

    case ADD_MESSAGE: {
      return {
        ...state,
        isFetching: false,
        allMessages: action.payload,
        isAllMessagesLoaded: false,
      };
    }

    case GET_MESSAGES: {
      return {
        ...state,
        isFetching: true,
        isAllMessagesLoaded: false,
      };
    }

    case GET_MESSAGES_ERROR: {
      return {
        ...initialState,
        isFetching: false,
      };
    }

    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        allMessages: [...action.payload, ...state.allMessages],
      };
    }

    case GET_MORE_MESSAGES: {
      return {
        ...state,
        isFetchingMore: true,
      };
    }

    case GET_MORE_MESSAGES_SUCCESS: {
      return {
        ...state,
        isFetchingMore: false,
        allMessages: [...action.payload, ...state.allMessages],
      };
    }
    case GET_MORE_MESSAGES_ERROR: {
      return {
        ...state,
        isFetchingMore: false,
      };
    }

    case ALL_MESSAGES_LOADED: {
      return {
        ...state,
        isAllMessagesLoaded: true,
        isFetching: false,
        isFetchingMore: false,
      };
    }

    case UPDATE_MESSAGE: {
      return {
        ...state,
        isFetching: false,
        allMessages: [...state.allMessages, action.payload],
      };
    }

    default:
      return state;
  }
};