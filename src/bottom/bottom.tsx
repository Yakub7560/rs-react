import React from 'react';
import './bottom.css';

type Info = {
  count: number;
  pages: string;
  next: string;
  prev: string | null;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

interface IResponceData {
  info: Info;
  results: [
    {
      id: number;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      origin: Origin;
      location: Location;
      image: string;
      episode: [string];
      url: string;
      created: string;
    },
  ];
}

interface IPropsLS {
  SearchText?: string | undefined;
}

class Bottom extends React.Component<IPropsLS, {
  SearchData: IResponceData | null; SearchText: string | undefined;
  isLoading: boolean;
}
>{

  constructor(props: IPropsLS) {
    super(props);
    this.state = { SearchData: null, isLoading: true, SearchText: '' };
  }



  componentDidMount() {
    let request = 'https://rickandmortyapi.com/api/character/';
    if (localStorage.getItem('myValue')) {
      request = `https://rickandmortyapi.com/api/character/?name=${localStorage.getItem(
        'myValue'
      )}`;
    }
    setTimeout(() => {
      fetch(request)
        .then((res) => {
          if (!res.ok) {
            throw Error('There are no items');
          }
          return res.json();
        })
        .then((data: IResponceData) => {
          this.setState({ SearchData: data });
          this.setState({ isLoading: false });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }



  render() {
    return (
      <>
        {this.state.isLoading && <div className='loading__page'>Page is loading, please wait...</div>}
        <div className="container__cards">
          {this.state.SearchData?.results.map((card) => (
            <div key={`${card.id}`} className="container__card">
              <img src={card.image} className="card__img" alt="card" />
              <div> <span>Name:</span> {card.name}</div>
              <div><span>Gender:</span> {card.gender}</div>
              <div><span>Species:</span> {card.species}</div>
              <div><span>Status:</span> {card.status}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Bottom;

