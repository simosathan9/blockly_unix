// Ορισμός του generator για τη γλώσσα JavaScript
Blockly.JavaScript = new Blockly.Generator('JavaScript');
var generator = Blockly.JavaScript;

// Ορισμός του block regPattern
var regPatternBlock = {
  type: 'regPattern',
  category: 'Regular Expressions',
  message0: '%{BKY_REGPATTERN}',
  unix_description: [
    {
      regPattern: 'patt'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'regPattern',
      text: 'string' // default text for the input
    }
  ],
  previousStatement: 'Action',
  nextStatement: 'Action',
  style: 'Regular Expressions',
  tooltip: '%{BKY_REGPATTERN_TOOLTIP}',
  helpUrl: '%{BKY_REGPATTERN_HELPURL}' // URL to further information or documentation.
};

// Ορισμός του block στο Blockly
Blockly.defineBlocksWithJsonArray([regPatternBlock]);

// Ορισμός του generator για το block regPattern
generator.forBlock['regPattern'] = function (block) {
  var text = block.getFieldValue('regPattern');
  var code = `'${text}'`;
  return [code, generator.ORDER_ATOMIC];
};
