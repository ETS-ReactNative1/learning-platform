import { createHashHistory } from 'history';
const history = createHashHistory({ basename: process.env.PUBLIC_PATH });
export default history;
