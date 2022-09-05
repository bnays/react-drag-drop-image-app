import React, { memo, useCallback, useEffect, useState } from "react";
import Picture from "./Picture";
import HouseRoofImg from "../assets/images/houseroof.jpg"
import "../App.css";
import HouseRoof from "./HouseRoof";
import Dropzone from "./Dropzone";
import update from 'immutability-helper'

const DragDrop = memo(function DragDrop() {

   const [solars, setSolars] = useState([
      { limit: 8, noOfSolars: 0 },
      { limit: 4, noOfSolars: 0 },
      { limit: 3, noOfSolars: 0 },
      { limit: 2, noOfSolars: 0 },
      { limit: 2, noOfSolars: 0 },
      { limit: 1, noOfSolars: 0 },
      { limit: 2, noOfSolars: 0 },
      { limit: 1, noOfSolars: 0 },
      { limit: 8, noOfSolars: 0 },
      { limit: 5, noOfSolars: 0 },
   ])

   // useEffect(() => {
   //    console.log(solars, "Solars");
   // }, [solars])


   const handleDrop = useCallback(
      (index) => {
         setSolars(
            update(solars, {
               [index]: {
                  noOfSolars: {
                     $set: solars[index].noOfSolars + 1
                  }
               },
            }),
         )
      },
      [solars],
   )

   return (
      <>
         <h1>Drag Solar panel to the roof</h1>
         <div className="main-content">
            <div className="pictures">
               <Picture />
            </div>
            <div className="houseRoof">
               <HouseRoof roofImg={HouseRoofImg} />
               {solars.map(({ limit, noOfSolars }, index) => (
                  <div key={index} className={"board board__" + (index + 1)}>
                     <Dropzone onDrop={(item) => handleDrop(index, item)} limit={limit} noOfSolars={noOfSolars} />
                  </div>
               ))}
            </div>
         </div>
      </>
   );
})

export default DragDrop;