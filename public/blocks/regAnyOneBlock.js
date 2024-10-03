var regAnyOneBlock = {
  type: 'regAnyOne',
  category: 'Regular Expressions',
  unix_description: [
    {
      regPattern: '[stm]',
      notMatch: '[^stm]'
    }
  ],

  message0: '%{BKY_REGANYONE} \n %{BKY_REGANYONE_NOT}',
  args0: [
    {
      type: 'input_statement',
      name: 'regPattern',
      check: 'String'
    },

    {
      type: 'field_checkbox',
      name: 'notMatch',
      checked: false
    }
  ],

  tooltip: '%{BKY_REGANYONE_TOOLTIP}',
  previousStatement: null,
  nextStatement: null,
  style: 'Regular Expressions',
  helpUrl: '%{BKY_REGANYONE_HELPURL}' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([regAnyOneBlock]);
