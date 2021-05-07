import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Company from '../components/companies/Company';
import store from '../redux/store';

describe('renders correctly', () => {
  it('Contains the Spinner component', () => {
    const wrapper = shallow(<Provider store={store}><Company /></Provider>);
    expect(wrapper.find('Spinner')).toBeTruthy();
  });

  it('Contains the Card component', () => {
    const wrapper = shallow(<Provider store={store}><Company /></Provider>);
    expect(wrapper.find('Card')).toBeTruthy();
  });
});
