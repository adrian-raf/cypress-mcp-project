import 'allure-cypress';

import './commands';

const { register: registerCypressGrep } = require('@cypress/grep');

registerCypressGrep();
