var regStartBlock = {
  type: 'regStart',
  category: 'Regular Expressions',
  unix_description: [
    {
      regPattern: '^patt'
    }
  ],
  message0: '%{BKY_REGSTART}',
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_REGSTART_TOOLTIP}',
  helpUrl: '%{BKY_REGSTART_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regStartBlock]);
