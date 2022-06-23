import { useEffect, useState } from "react";

const Api = () => {
  const [resultArray, setResultArray] = useState([]);
  useEffect(() => {
    // axios
    //   .get(
    //     "http://dev-api-serivce.etruckingsoft.com/workorder/api/searchfavourites/getsearchFavouritesbyUserId"
    //   )
    fetch("https://api.sampleapis.com/beers/ale")
      .then((res) => res.json())
      .then((data) => setResultArray(data));
  }, []);
  return (
    <div>
      {resultArray.map((result) => {
        return (
          <tr>
            <td>{result.price}</td>
            <td>{result.name}</td>
            <td>{result.rating.average}</td>
          </tr>
        );
      })}
    </div>
  );
};

export default Api;
