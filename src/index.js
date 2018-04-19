// Load application styles
import 'styles/index.scss';

import { Templates } from './config/Config';

// application bootstrap

const container = document.querySelector("#application");
import * as TemplateService from './services/TemplateService';

TemplateService.append( Templates.FOO, container, { title: "Hello there." });
