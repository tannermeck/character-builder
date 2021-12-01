import { render } from '@testing-library/react';
import Image from './Image';

it('should render images in a snapshot', () => {
    const { container } = render(<Image head={'goat'} torso={'black-blouse'} legs={'speedo'} />)
    expect(container).toMatchSnapshot();
    
})