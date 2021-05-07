import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Sectors from '../components/companies/Sectors';
import store from '../redux/store';

describe('renders correctly', () => {
  it('Contains the Spinner component', () => {
    const wrapper = shallow(<Provider store={store}><Sectors /></Provider>);
    expect(wrapper.find('Spinner')).toBeTruthy();
  });

  it('Contains the Card component', () => {
    const wrapper = shallow(<Provider store={store}><Sectors /></Provider>);
    expect(wrapper.find('Card')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Sectors /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
