import React from 'react'
import { useSelector } from "react-redux";
import ProductsCard from '../../product/ProductsCard';
const DachboardClient = () => {
  const list = useSelector((state) => state.prod.products);
  // console.log(list)
  const currentUser=useSelector(state=>state.auth.currentUser);

  // console.log(currentUser&& currentUser.role)
  const movieF = list.filter(el => el.disponible ===true);
  return (
    <div>
      <h1>My WatchList </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
          paddingLeft:"100px",
          paddingTop:"50px"
        }}
      >
        {movieF.map((el) => <ProductsCard prod={el} key={el._id} />)}
      </div>
      
      </div>
  ) 
}

export default DachboardClient