import "./styles.css";
import ShowMovies from "./component/Dynamic-Importing/ShowMovies";
import Parent from "./component/Lazy-Loading/Parent";
import ErrorBoundary from "./component/Error-Boundary/ErrorBoundary";
import Crashcomponent from "./component/Error-Boundary/Crashcomponent";
import SearchInput from "./component/Debouncing/SearchInput";
import ParentHOC from "./component/HOC/Parent";
import HeaderCustomHook from "./component/CustomHooks/UseStateCH/HeaderCustomHooks";
export default function App() {
  return (
    <div className="App">
      <ShowMovies />
      <Parent />
      <ErrorBoundary>
        <Crashcomponent />
      </ErrorBoundary>
      <div>
        <SearchInput />
      </div>
      <div>
        <ParentHOC />
      </div>
      <div>
        <HeaderCustomHook />
      </div>
    </div>
  );
}
