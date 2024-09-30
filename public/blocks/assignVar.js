var assignVarBlock = {
  type: 'assignVar',
  category: 'Data Processing',
  message0: '%{BKY_ASSIGN_VAR}',
  message1: '%1',
  args1: [
    {
      type: 'input_statement',
      name: 'DO'
    }
  ],
  extensions: ['restrict_assignVar_to_awk_input_variable'],
  output: 'String',
  style: 'Data Processing',
  tooltip: '%{BKY_ASSIGN_VAR_TOOLTIP}',
  helpUrl: '%{BKY_ASSIGN_VAR_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([assignVarBlock]);
