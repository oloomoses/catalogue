import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Navigation from '../components/layout/Navigation';
import store from '../redux/store';

describe('renders correctly', () => {
  it('Contains the Navbar component', () => {
    const wrapper = shallow(<Provider store={store}><Navigation /></Provider>);
    expect(wrapper.find('Navbar')).toBeTruthy();
  });

  it('Contains the Form component', () => {
    const wrapper = shallow(<Provider store={store}><Navigation /></Provider>);
    expect(wrapper.find('Form')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Navigation /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
