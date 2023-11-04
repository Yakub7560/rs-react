import React from 'react';
import './errorbutton.css'



class ErrorBoundaryButton extends React.Component<object,{ classNameButton: string }> {
   constructor(props: { classNameButton: string }) {
      super(props);
      this.state = { classNameButton: 'class_without_error' };
   }

   handleClick = () => {
      this.setState({ classNameButton: 'class_with_error' });
   };

   render() {
      if (this.state.classNameButton === 'class_without_error') {
         return (
            <div className='btn__wrapper'>
               <button
                  onClick={this.handleClick}
                  className={this.state.classNameButton}
               >
                  Error button
               </button>
            </div>
         );
      }
      throw new Error('I crashed!');
   }
}

export default ErrorBoundaryButton;