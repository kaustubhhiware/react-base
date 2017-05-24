import request from '../utils/network';

export default function getMatches() {
  return function(dispatch, getState) {
    var query = getState().collectionState.get("searchString");
    if (!!query) {
      let redirecturl = `/feeds/posts?search="${query}"`;
      let promise = request({url: redirecturl});
      promise.then(({data}) => {
      	data = data.map(x => x.content[0].title);
        dispatch({type: "UPDATE_POSTS", payload: {data}});
      })
    }
  };
}