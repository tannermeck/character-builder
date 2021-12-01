import { render } from '@testing-library/react';
import Body from './Body';

it('should render a snapshot test of the body', () => {
    const { container } = render(<Body />)
    expect(container).toMatchSnapshot();
})