
import ACTION_TYPES from '../actionTypes';
import { GeneralAction, MerchandiseReducer } from '../../types';

const initialState: MerchandiseReducer = {
  isLoadingMerchandiseList: false,
  MerchandiseList: [],
  userMerchandise: [],
};

export default (state = initialState, action: GeneralAction) => {
  let newState = state;


  switch (action.type) {

    // ---------- MERCHANDISE_LIST ----------

    case ACTION_TYPES.MERCHANDISE_LIST.REQUEST:
      newState = {
        ...state,
        isLoadingMerchandiseList: true,
        MerchandiseList: [],
      };
      break;
    case ACTION_TYPES.MERCHANDISE_LIST.SUCCESS:
      newState = {
        ...state,
        isLoadingMerchandiseList: false,
        MerchandiseList: [...action.payload],
      };
      break;
    case ACTION_TYPES.MERCHANDISE_LIST.FALIURE:
      newState = {
        ...state,
        isLoadingMerchandiseList: false,
        MerchandiseList: [],
      };
      break;

    // ---------- USER_MERCHANDISE ----------

    case ACTION_TYPES.USER_MERCHANDISE.REQUEST:
      newState = {
        ...state,
        isLoadingMerchandiseList: true,
        userMerchandise: [],
      };
      break;
    case ACTION_TYPES.USER_MERCHANDISE.SUCCESS:
      newState = {
        ...state,
        isLoadingMerchandiseList: false,
        userMerchandise: [...action.payload],
      };
      break;
    case ACTION_TYPES.USER_MERCHANDISE.FALIURE:
      newState = {
        ...state,
        isLoadingMerchandiseList: false,
        userMerchandise: [],
      };
      break;
    case ACTION_TYPES.USER_MERCHANDISE.SET:
      newState = {
        ...state,
        userMerchandise: [...action.payload],
      };
      break;


    default:
      break;
  }
  return newState;
};


// [
//   {
//     "id": "6fee4d7a-d0b4-4c60-a07a-e65ba707d36a",
//     "creationDateTime": "2021-02-27T13:00:29.0839409+00:00",
//     "imageBase64": "hey",
//     "price": 100,
//     "type": 3,
//     "merchTypeName": "GlowingWristband"
//   },
//   {
//     "id": "6aa78200-42f0-4b30-a736-4aa67adb8740",
//     "creationDateTime": "2021-02-27T20:24:48.458932+00:00",
//     "imageBase64": "",
//     "price": 100,
//     "type": 1,
//     "merchTypeName": "Keychains"
//   },
//   {
//     "id": "66687b66-3c27-4bd1-bdd8-92d4d90d306e",
//     "creationDateTime": "2021-02-27T20:24:48.461649+00:00",
//     "imageBase64": "",
//     "price": 90,
//     "type": 2,
//     "merchTypeName": "RubberWristband"
//   },
//   {
//     "id": "9311cf30-4774-4ac6-97f2-f56fce74fb95",
//     "creationDateTime": "2021-02-27T20:24:48.461673+00:00",
//     "imageBase64": "",
//     "price": 80,
//     "type": 3,
//     "merchTypeName": "GlowingWristband"
//   },
//   {
//     "id": "48c0e5ab-b34f-4004-9bca-e8a693e4fae9",
//     "creationDateTime": "2021-02-27T20:24:48.461675+00:00",
//     "imageBase64": "",
//     "price": 70,
//     "type": 4,
//     "merchTypeName": "FiberWristband"
//   }
// ]