var cdBlock = {
  type: 'cd',
  category: 'Filesystem Operations',
  unix_description: [{}],
  message0: '%{BKY_CD} %1',
  args0: [
    {
      type: 'field_input',
      name: 'directory',
      text: '............' // empty text for user to define path
    }
  ],
  style: 'Filesystem Operations',
  tooltip: '%{BKY_CD_TOOLTIP}',
  helpUrl: '%{BKY_CD_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([cdBlock]);
