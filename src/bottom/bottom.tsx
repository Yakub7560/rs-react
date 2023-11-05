import { useState, useEffect } from "react";
import './bottom.css';

type AllInfo = {
  count: number;
  pages: string;
  next: string;
  prev: string | null;
};

type Loc = {
  name: string;
  url: string;
};

type Org = {
  name: string;
  url: string;
};



interface ResData {
  info: AllInfo;
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: Org;
      location: Loc;
      image: string;
      episode: [string];
      url: string;
      created: string;
    },
  ];
}



function Bottom() {
  const [SearchData, setSearchData] = useState<ResData | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    let rqst = "https://rickandmortyapi.com/api/character/";
    if (localStorage.getItem("myValue")) {
      rqst = `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
        "myValue"
      )}`;
    }

    setTimeout(() => {
      fetch(rqst)
        .then((res) => {
          if (!res.ok) {
            throw Error("No any items");
          }
          return res.json();
        })
        .then((data: ResData) => {
          setSearchData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, 1000);
  }, []);

  return (
    <>
      {isLoading && <div className='loading__page'>Page is loading, please wait...</div>}
      <div className="container__cards">
        {SearchData?.results.map((item) => (
          <div key={`${item.id}`} className="container__card">
            <img src={item.image} className="card__img" alt="card" />
            <div><span>Name:</span> {item.name}</div>
            <div><span>Gender:</span> {item.gender}</div>
            <div><span>Species:</span> {item.species} </div>
            <div><span>Type:</span> {item.type} </div>
            <div><span>Status:</span> {item.status}</div>
            <div><span>Created:</span> {item.created}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Bottom;
