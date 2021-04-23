import renderer from 'react-test-renderer';
import Spinner from '../components/layout/Spinner';

describe('renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Spinner />);
    expect(tree).toMatchSnapshot();
  });
});
