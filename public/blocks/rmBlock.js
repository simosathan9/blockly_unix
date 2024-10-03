var rmBlock = {
  type: 'rm',
  category: 'Filesystem Operations',
  unix_description: [
    {
      force: '-f',
      request_confirmation: '-i',
      remove_directory: '-d',
      recursive: '-R',
      undelete: '-W'
    }
  ],
  message0: '%{BKY_RM} %1',
  args0: [
    {
      type: 'input_value',
      name: 'ARGUMENT',
      check: 'String'
    }
  ],
  message1: '%{BKY_RM_FORCE}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'force',
      checked: false
    }
  ],
  message2: '%{BKY_RM_REQUEST_CONFIRMATION}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'request_confirmation',
      checked: false
    }
  ],
  message3: '%{BKY_RM_REMOVE_DIRECTORIES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'remove_directory',
      checked: false
    }
  ],
  message4: '%{BKY_RM_RECURSIVE}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'recursive',
      checked: false
    }
  ],
  extensions: [],
  style: 'Filesystem Operations',
  tooltip: '%{BKY_RM_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/rm',

  generateCommand: function (block) {
    let rmCommand = 'rm ';
    const force = block.getFieldValue('force') === 'TRUE';
    const requestConfirmation =
      block.getFieldValue('request_confirmation') === 'TRUE';
    const removeDirectory = block.getFieldValue('remove_directory') === 'TRUE';
    const recursive = block.getFieldValue('recursive') === 'TRUE';

    if (force) rmCommand += '-f ';
    if (requestConfirmation) rmCommand += '-i ';
    if (removeDirectory) rmCommand += '-d ';
    if (recursive) rmCommand += '-R ';

    const argumentBlock = block.getInputTargetBlock('ARGUMENT');
    rmCommand += ' ' + handleArgumentsBlocks(argumentBlock);

    generatedCommand = rmCommand;
    return generatedCommand;
  }
};

Blockly.defineBlocksWithJsonArray([rmBlock]);
