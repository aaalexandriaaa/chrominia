import React from 'react'

const SuppliesCard = ({supplies}) => {
  return (
    <>
      {supplies.map((supply, idx) =>
        <div key={idx}>
          {supply.name}
        </div>
        )}
    </>
  );
}
 
export default SuppliesCard;