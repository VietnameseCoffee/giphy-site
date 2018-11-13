import axios from 'axios';


export const RECEIVE_GIFS = "RECEIVE_GIFS";

const receiveGifs = (data) => {
  return {
    type: RECEIVE_GIFS,
    payload: data
  }

}

export const fetchGifs = () => (dispatch) => {
  return (axios({
    method:'get',
    url:'https://api.giphy.com/v1/gifs/trending?api_key=mEkgPEPlWVMMmbzPzoaOAN42pKCuKy2c',
    responseType: 'json'
    })
      .then( (res) => {
        dispatch(receiveGifs(res.data.data))
      }))
}


// export const requestBusiness = (id) => (dispatch) => {
//   return (BusinessApiUtil.showBusiness(id)
//     .then( business => dispatch(receiveBusiness(business))));
// };