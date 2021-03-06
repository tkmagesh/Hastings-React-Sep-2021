/* 
export { addNew } from './add-new'
export { toggle } from './toggle';
export { remove } from './remove';
export { removeClosed } from './remove-closed'; 
*/

import { addNew } from './add-new'
import { toggle } from './toggle';
import { remove } from './remove';
import { removeClosed } from './remove-closed';
import { load } from './load';

const bugActionCreators = { addNew, toggle, remove, removeClosed, load };

export default bugActionCreators;