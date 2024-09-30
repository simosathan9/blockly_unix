var beginBlock = {
  type: 'begin',
  category: 'Data Processing',
  message0: '%{BKY_BEGIN}',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  extensions: ['restrict_begin_to_awk_begin'],
  output: 'String',
  style: 'Data Processing',
  tooltip: '%{BKY_BEGIN_TOOLTIP}',
  helpUrl: '%{BKY_BEGIN_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([beginBlock]);
