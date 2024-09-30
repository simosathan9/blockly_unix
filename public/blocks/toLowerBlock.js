var toLowerBlock = {
  type: 'tolower',
  category: 'String Functions',
  unix_description: [
    {
      TEXT: '(str)'
    }
  ],
  message0: '%{BKY_TO_LOWER} %1',
  args0: [
    {
      type: 'input_value',
      name: 'TEXT'
    }
  ],
  output: null,
  style: 'String Functions',
  tooltip: '%{BKY_COLUMN_TOOLTIP}',
  helpUrl: '%{BKY_COLUMN_HELPURL}'
};

Blockly.defineBlocksWithJsonArray([toLowerBlock]);
