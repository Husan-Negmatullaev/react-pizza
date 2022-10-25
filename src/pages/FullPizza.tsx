import React from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export interface IPizzas {
   imageUrl: string;
   title: string;
   price: number;
} 

const FullPizza: React.FC = () => {
   const [pizzaData, setPizzaData] = React.useState<IPizzas>();
   const navigate = useNavigate();
   const { pizzaId } = useParams();

   React.useEffect(() => {
      async function fetchPizzaById() {
         try {
            const { data } = await axios.get(`https://6325f5f370c3fa390f9214e1.mockapi.io/items/${pizzaId}`);
            setPizzaData(data);
         } catch (error) {
            alert("Не смог найти пиццу, по этому url-адресу");
            navigate("/");
         }
      }
      fetchPizzaById();
   }, [])

   if (!pizzaData) {
      return <div className="container">
         Загрузка...
      </div>;
   }

   return (
      <div className="container">
         <img src={pizzaData.imageUrl} alt="" />
         <h2>{pizzaData.title}</h2>
         <h4>{pizzaData.price} ₽</h4>
      </div>
   )
}

export default FullPizza;