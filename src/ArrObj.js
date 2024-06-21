import React, { useState } from "react";

export default function ArrObj() {
  const x = [
    { name: "Nidhi" },
    { age: 23 },
    {
      address: {
        area: "CG",
        city: "Ahmedabad",
      },
    },
  ];

  const y = [{ name: "dev" }, { age: 12 }];

  const z = {
    name: "Bina",
    age: 34,
  };

  const [arrObj, setArrObj] = useState(x);
  const [arr, setArr] = useState(y);
  const [obj, setObj] = useState(z);
  return (
    <div>
        <div>
      <li>{arrObj[0].name}</li>
      <li>{arrObj[1].age}</li>
      <li>{arrObj[2].address.area}</li>
      <li>{arrObj[2].address.city}</li>
      <button
        onClick={() => {
          setArrObj([
            { name: "Nidhi" },
            { age: 23 },
            {
              address: {
                area: "SG",
                city: "Ahmedabad",
              },
            },
          ]);
        }}
      >
        ArrObj
      </button>
      </div>

      <div>
        <li>{arr[0].name}</li>
        <li>{arr[1].age}</li>
        <button onClick={()=>{
            setArr([
                ...arr,
                { name: "dev123" },
            ])
        }}>Arr</button>
      </div>

      <div>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <button onClick={()=>{
            setObj({
                ...obj,
                name: "Bina123"
            })
        }}>Object</button>
      </div>
    </div>
  );
}
