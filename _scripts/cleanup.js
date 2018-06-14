const shell = require('shelljs');

shell.rm('-rf', '.nyc_output');
shell.rm('-rf', 'typings');

shell.rm('-rf', 'action.creators');
shell.rm('-rf', 'action.handlers');
shell.rm('-rf', 'action.types');
shell.rm('-rf', 'reducer');
shell.rm('-rf', 'initial');
shell.rm('-rf', 'state');

shell.rm('-rf', 'core');

shell.rm('-rf', 'index.js');
shell.rm('-rf', 'index.js.map');
