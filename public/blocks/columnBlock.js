var columnBlock = {
  type: 'column',
  category: 'Field Processing',
  unix_description: [
    {
      TEXT: '$str'
    }
  ],
  message0: '%{BKY_COLUMN} %1',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT'
    }
  ],
  output: null,
  style: 'Field Processing',
  tooltip: '%{BKY_COLUMN_TOOLTIP}',
  helpUrl: '%{BKY_COLUMN_HELPURL}',
  generateCommand: function (block) {
    var text = block.getFieldValue('TEXT');
    return '$' + text;
  }
};

Blockly.defineBlocksWithJsonArray([columnBlock]);
