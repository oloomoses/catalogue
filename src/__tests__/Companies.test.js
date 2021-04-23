import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Companies from '../components/companies/Companies';
import store from '../redux/store';

describe('renders correctly', () => {
  it('Contains the StockItems component', () => {
    const wrapper = shallow(<Provider store={store}><Companies /></Provider>);
    expect(wrapper.find('StockItems')).toBeTruthy();
  });

  it('Contains the Spinner component', () => {
    const wrapper = shallow(<Provider store={store}><Companies /></Provider>);
    expect(wrapper.find('Spinner')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Companies /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
