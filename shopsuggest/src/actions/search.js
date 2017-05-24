import request from '../utils/network';

export function setString(string) {
  return function(dispatch) {
    dispatch({type: "UPDATE_STRING", payload: {data: string}});
  }
}

export function getSuggest(query) {
  return function(dispatch) {
    let resultList = [];
    if(!!query && query.length > 2) {
      var typeAheadUrl = "/type_ahead";
      let url = typeAheadUrl + `?search="` + query + `"`;
      var promise = request({url});
      promise.then(({data}) => {
        data.forEach((item) => {
          // var option = document.createElement('option');
          // option.value = item.display_text;
          // dataList.appendChild(option);
          resultList.push(item.display_text);
        });
        // this.setState({resultList});
        dispatch({type: "QUERY_STRING", payload: {resultList}});
      })
    }    
  }
}