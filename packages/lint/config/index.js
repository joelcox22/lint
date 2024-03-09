import eslint from './eslint.js';
import prettier from './prettier.js';
import vscode from './vscode.js';
import editorconfig from './editorconfig.js';
import markdown from './markdown.js';
import semanticRelease from './semantic-release.js';
import * as util from '../util.js';

const debug = util.debug('configure');

export default function configure() {
  Object.entries({
    eslint,
    prettier,
    vscode,
    editorconfig,
    markdown,
    semanticRelease,
  }).forEach(([name, applyConfig]) => {
    debug(`applying config changes for ${name}`);
    applyConfig();
  });
}