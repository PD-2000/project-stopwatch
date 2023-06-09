import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container);

root.render(<App />);