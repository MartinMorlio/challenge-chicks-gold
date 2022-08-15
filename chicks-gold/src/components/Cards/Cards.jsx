import Card from "../Card/Card";
import CardData from "./CardData"; 

export const Cards = () => {
//   const props = {
//     id: 1,
//     image: "https://chicks-products.s3.amazonaws.com/c33c0a32-cda7-4f61-8c27-149b825545dd",
//     name: "Chicks Gold",
//     price: "$9.99",
// }
  return (
    <div className="cards__container">
      <div className="cards__card-container">
        <Card details={CardData} />
        
      </div>
    </div>
  );
};
export default Cards;
