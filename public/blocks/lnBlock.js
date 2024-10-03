var lnBlock = {
  type: 'ln',
  category: 'Filesystem Operations',
  message0: '%{BKY_LN_MESSAGE}',
  unix_description: [
    {
      command: 'ln',
      symbolic: '-s',
      force: '-f',
      interactive: '-i',
      follow_symlink: '-L',
      no_symlink_follow: '-P',
      SOURCE: 'str'
    }
  ],
  message1: '%{BKY_LN_SYMBOLIC_LINK}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'symbolic',
      checked: false // by default it's disabled
    }
  ],
  message2: '%{BKY_LN_FORCE}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'force',
      checked: false // by default it's disabled
    }
  ],
  message3: '%{BKY_LN_INTERACTIVE}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'interactive',
      checked: false // by default it's disabled
    }
  ],
  message4: '%{BKY_LN_SOURCE}: %1 %{BKY_LN_TARGET}: %2',
  args4: [
    {
      type: 'input_value',
      name: 'SOURCE',
      text: 'source', // default source
      check: 'String'
    },
    {
      type: 'input_value',
      name: 'TARGET',
      text: 'target', // default target
      check: 'String'
    }
  ],
  style: 'Filesystem Operations',
  tooltip: '%{BKY_LN_TOOLTIP}',
  helpUrl: 'https://linux.die.net/man/1/ln',
  generateCommand: function (block) {
    let lnCommand = 'ln ';
    const symbolic = block.getFieldValue('symbolic') === 'TRUE';
    const force = block.getFieldValue('force') === 'TRUE';
    const interactive = block.getFieldValue('interactive') === 'TRUE';

    if (symbolic) lnCommand += ' -s ';
    if (force) lnCommand += ' -f ';
    if (interactive) lnCommand += ' -i ';

    const sourceArgsBlock = block.getInputTargetBlock('SOURCE');
    const targetArgsBlock = block.getInputTargetBlock('TARGET');
    lnCommand +=
      handleArgumentsBlocks(sourceArgsBlock) +
      ' ' +
      handleArgumentsBlocks(targetArgsBlock);

    generatedCommand = lnCommand;
    return generatedCommand;
  }
};

Blockly.defineBlocksWithJsonArray([lnBlock]);
