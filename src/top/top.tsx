import { useState } from 'react';
import './topcontainer.css';



function Top() {
  const [SearchVal, setSearchVal] = useState(localStorage.getItem('myValue') || '');

  const handleSub = () => {
    localStorage.setItem('myValue', SearchVal);
  };

  return (
    <div>
      <div className="search__container">
        <form onSubmit={handleSub}>
          <input
            type="search"
            className="input__search"
            defaultValue={localStorage.getItem('myValue') || ''}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button className="search__btn">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Top;





