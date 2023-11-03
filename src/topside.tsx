import React from 'react';
import './topside.css';

interface TopProps {
  // No props required
}

interface TopState {
  result: Array<{
    name: string;
    height: string;
    mass: string;
    gender: string;
    birth_year: string;
  }>;
}

class Top extends React.Component<TopProps, TopState> {
  state = {
    result: [],
  };

  componentDidMount() {
    fetch('https://swapi.dev/api/people/?search=')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ result: data.results });
      });
  }

  render(): React.ReactNode {
    const { result } = this.state;

    const characterList = result.map((character, index) => (
      <div key={index} className="list__item">
        <div className="bolder">
          {' '}
          {index + 1}. Name: {character["name"]}
        </div>
        <div>Height: {character["height"]} cm</div>
        <div>Mass: {character["mass"]} kg</div>
        <div>Gender: {character["gender"]} </div>
        <div>Date: {character["birth_year"]} </div>
      </div>
    ));

    return <div className="list">{characterList}</div>;
  }
}

export default Top;

