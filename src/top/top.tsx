import React from 'react';
import './topcontainer.css';
import Bottom from '../bottom/bottom';

interface TopProps {
  SearchText?: string | undefined;
}

class Top extends React.Component<TopProps, { SearchVal: string }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      SearchVal: localStorage.getItem('myValue') || '',
    };
  }

  handleSub = () => {
    localStorage.setItem('myValue', this.state.SearchVal);
  };

  render(): React.ReactNode {
    return (
      <div>
        <div className="search__container">
          <form onSubmit={this.handleSub}>
            <input
              type="search"
              className="input__search"
              defaultValue={localStorage.getItem('myValue') || ''}
              onChange={(e) =>
                this.setState({
                  SearchVal: e.target.value,
                })
              }
            />
            <button className="search__btn">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Top;