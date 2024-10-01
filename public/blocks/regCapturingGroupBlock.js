var regCapturingGroupBlock = {
  type: 'regCapturingGroup',
  unix_description: [
    {
      Group: '(patt)'
    }
  ],
  category: 'Regular Expressions',
  message0: '%{BKY_REGCAPTURINGGROUP}',
  args0: [
    {
      type: 'input_statement',
      name: 'Group',
      check: 'String'
    }
  ],
  tooltip: '%{BKY_REGCAPTURINGGROUP_TOOLTIP}',
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  helpUrl: '%{BKY_REGCAPTURINGGROUP_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regCapturingGroupBlock]);
