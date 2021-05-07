import renderer from 'react-test-renderer';
import StockItems from '../components/stock/StockItems';

describe('renders correctly', () => {
  it('matches the snapshot', () => {
    const company = {
      changes: 'BRK-A',
      changesPercentage: 2939,
      companyName: 'Berkshire Hathaway Inc',
      price: 408840,
      ticker: 'BRK-A',
    };
    const tree = renderer.create(<StockItems company={company} />);
    expect(tree).toMatchSnapshot();
  });
});
