import Bottom from './bottom/bottom';
import ErrorBoundary from './errorBoundary/errorboundary';
import ErrorBoundaryButton from './errorBoundary/errorboundarybutton';
import Top from './top/top';
function App() {
  return (
    <ErrorBoundary>
      <ErrorBoundaryButton/>
      <Top />
      <Bottom />
      
      
    </ErrorBoundary>
  );
}

export default App;
