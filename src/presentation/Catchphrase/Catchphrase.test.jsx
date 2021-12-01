import { render } from '@testing-library/react';
import Catchphrase from './Catchphrase';

it('should render catchphrases in a snapshot', () => {
    const { container } = render(<Catchphrase catchphraseList={['woohoo', 'meow', 'bark']}/>)
    expect(container).toMatchSnapshot();
    
})