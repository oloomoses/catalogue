import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';

describe('renders correctly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Contains the Navigation component', () => {
    expect(wrapper.find('Navigation')).toBeTruthy();
  });

  it('Contains the Companies component', () => {
    expect(wrapper.find('Companies')).toBeTruthy();
  });

  it('Contains the Sectors component', () => {
    expect(wrapper.find('Sectors')).toBeTruthy();
  });

  it('Contains the Company component', () => {
    expect(wrapper.find('Company')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
