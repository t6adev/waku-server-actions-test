import { Content } from '../components/content.js';
import { serverActionA, serverActionB } from '../actions/action.js';

export const HomePage = async () => {
  return (
    <div>
      <Content serverActionA={serverActionA} serverActionB={serverActionB} />
    </div>
  );
};
