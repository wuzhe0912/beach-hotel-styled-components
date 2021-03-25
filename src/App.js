import { Button, NewButton } from './constant/Buttons';
import GlobalStyle from './constant/GlobalStyle';

function App() {
  return (
    <div className='App'>
      <div>456</div>
      <Button className='btn' primary>
        Click Me
      </Button>
      <NewButton>Click Me2</NewButton>
      <GlobalStyle />
    </div>
  );
}

export default App;
