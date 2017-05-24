import Immutable from 'immutable';

const initialState = Immutable.Map({
  "searchString": "",
  "posts": [],
  "resultList": [],
});

const reducers = {
	QUERY_STRING: (state, {resultList}) => state.updateIn(["resultList"], query => resultList),
  UPDATE_STRING: (state, {data}) => state.updateIn(["searchString"], query => data),
  UPDATE_POSTS: (state, {data}) => state.updateIn(["posts"], query => data)
};

export default function reducer(state = initialState, action = {}) {
    if (action.type in reducers)
        return reducers[action.type](state, action.payload);
    return state;
}
