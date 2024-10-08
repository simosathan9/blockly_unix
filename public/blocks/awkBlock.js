var awkBlock = {
  type: 'awk',
  category: 'Field Processing',
  unix_description: [
    {
      awkInput_delimiter: "-F 'str' " // Change to awk_delimiter
    }
  ],
  message0: '%{BKY_AWK_TEXT_DATA_PROCESSING}',
  message1: '%{BKY_AWK_INPUT_DELIMITER} %1',
  args1: [
    {
      type: 'field_input',
      name: 'awkInput_delimiter', // Change to awk_delimiter
      text: ''
    }
  ],
  message2: '%{BKY_AWK_CONDITION_ACTION} %1',
  args2: [
    {
      type: 'input_statement',
      name: 'awkConditionAction'
    }
  ],
  style: 'Field Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_AWK_TOOLTIP}',
  helpUrl: '%{BKY_AWK_HELPURL}', // URL to further information or documentation.
  generateCommand: function (block) {
    var awkInput_delimiter = block.getFieldValue('awkInput_delimiter');
  }
};

Blockly.defineBlocksWithJsonArray([awkBlock]);
