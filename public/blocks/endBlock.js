var endBlock = {
  type: 'end',
  category: 'Data Processing',
  message0: '%{BKY_END}',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  extensions: ['restrict_end_to_awk_end'],
  output: 'String',
  style: 'Data Processing',
  tooltip: '%{BKY_END_TOOLTIP}',
  helpUrl: '%{BKY_END_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([endBlock]);
