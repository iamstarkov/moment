import moment from './src/moment';
import { equal } from 'assert';

const pattern = 'DD MMMM YYYY';

it('strict en', () => {
    equal(moment('20 december 2012', pattern, 'en', true).isValid(), true);
});

it('strict ru', () => {
    equal(moment('20 декабря 2012', pattern, 'ru', true).isValid(), true);
});
