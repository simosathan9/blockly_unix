var indexBlock = {
  type: 'index',
  category: 'String Functions',
  unix_description: [
    {
      string: 'string',
      word: 'word'
    }
  ],
  message0: '%{BKY_INDEX}',
  args0: [
    {
      type: 'input_value',
      name: 'word'
    },
    {
      type: 'input_value',
      name: 'string'
    }
  ],
  style: 'String Functions',
  output: null,
  tooltip: '%{BKY_INDEX_TOOLTIP}',
  helpUrl: '%{BKY_INDEX_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([indexBlock]);
