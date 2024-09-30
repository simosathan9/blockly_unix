var toUpperBlock = {
  type: 'toupper',
  category: 'String Functions',
  unix_description: [
    {
      TEXT: 'toupper(str)'
    }
  ],
  message0: '%{BKY_TO_UPPER} %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT'
    }
  ],
  output: null,
  style: 'String Functions',
  tooltip: '%{BKY_TO_UPPER_TOOLTIP}',
  helpUrl: '%{BKY_COLUMN_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([toUpperBlock]);
