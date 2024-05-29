// first method to sort the search issue - search the restaurantlist
// function filterData(searchText) {
//   const filteredData = restaurantList.filter((restaurant) =>
//     restaurant.data.name.includes(searchText)
//   );
//   return filteredData;
// }

export function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    // always use optional chaining
    restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  console.log("filtered");
  return filteredData;
}
