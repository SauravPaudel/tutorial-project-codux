import { createBoard } from '@wixc3/react-board';
import { Pupil } from '../../../components/pupil/pupil';

export default createBoard({
    name: 'Pupil',
    Board: () => <Pupil />
});
