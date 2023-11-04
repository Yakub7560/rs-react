import React from 'react';

interface Prop {
   children: React.ReactNode;
}
interface Stat {
   hasError: boolean;
}

class ErrorBoundary extends React.Component<Prop, Stat> {
   constructor(props: Prop) {
      super(props);
      this.state = { hasError: false };
   }

   static getDerivedStateFromError(error: Error) {
      console.log(error.message);
      return { hasError: true };
   }

   render() {
      if (this.state.hasError) {
         return <div className='smth__wrong'>Something went wrong...</div>;
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
