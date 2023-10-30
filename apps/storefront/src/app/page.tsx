import { log } from 'logger';
import App from '../components/App';
import GlobalStyles from '../components/GlobalStyles';

export const metadata = {
  title: 'Store | Next.js',
};

export default function Store(): JSX.Element {
  log('Hey! This is the Store page.');

  return (
    <>
      <App />
      <GlobalStyles />
    </>
  );
}
