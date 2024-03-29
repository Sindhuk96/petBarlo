import { CDN_URL } from "../utils/constants";
import {useContext} from "react";
import UserContext from "../utils/UserContext";

//passing dynamic data without destructuring
const RestaurantCard=(props)=>{
    const {resData}=props;
    console.log(resData?.info);
    const {name,cuisines,cloudinaryImageId,costForTwo,avgRating}=resData?.info;
    const {loggedinuser}=useContext(UserContext);
  return (
    <div className="rest-card m-4 p-4 w-44 h-80 bg-blue-50 rounded-md overflow-hidden shadow-md hover">
        <img className="rest-logo w-full h-3/6 rounded-sm" alt="rest-logo" src={ CDN_URL+ cloudinaryImageId} />
        <h5 className="font-medium my-2">{name}</h5>
        <h6>Rating: {avgRating}</h6>
        <div className="w-5/6">{cuisines.join(",")}</div>
        <h6>{costForTwo}</h6>
        <h6>{loggedinuser}</h6>
    </div>
  );  
};

export const IsOpen=(RestaurantCard)=>{
  return (props)=>{
      return (
        <div>
            <label className="absolute bg-black text-white m-2 p-2">open</label>
            <RestaurantCard {...props}/>
        </div>
      );    
  };  
};

export default RestaurantCard;