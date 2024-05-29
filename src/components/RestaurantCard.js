import { IMG_CDN_URL } from "../config";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// More simpler form of writing above function after destructuring
// the restaurant.data

const RestaurantCard = ({ cloudinaryImageId, cuisines, name }) => {
  {
    // if use props as parameter => const RestaurantCard = (props) =>
    // then = use it like <h2>{props.restaurant.data?.name}</h2>
  }
  // object destructuring
  // const  { cloudinaryImageId, name, cuisines, lastMileTravel } = restaurant.data;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      {/* <h4>{lastMileTravel} minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;
