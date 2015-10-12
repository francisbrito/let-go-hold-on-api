/* eslint-disable no-console */
import createApplication from '../';

const application = createApplication();
const PORT = process.env.NODE_PORT || 3000;

application.listen(PORT);

console.log(`listening at port ${PORT}`);
