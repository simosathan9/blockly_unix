var conditionBlock = {
  type: 'condition',
  category: 'Field Processing',
  message0: '%1', // First message line for left_part
  args0: [
    {
      type: 'input_value',
      name: 'left_part',
      check: ['String', 'Number', 'Boolean'] // Allow both String and Number types
    }
  ],
  message1: '%1', // Second message line for operator
  args1: [
    {
      type: 'field_dropdown',
      name: 'operator',
      options: [
        ['==', '=='],
        ['!=', '!='],
        ['<', '<'],
        ['<=', '<='],
        ['>', '>'],
        ['>=', '>=']
      ]
    }
  ],
  message2: '%1', // Third message line for right_part
  args2: [
    {
      type: 'input_value',
      name: 'right_part',
      check: ['String', 'Number', 'Boolean'] // Allow both String and Number types
    }
  ],
  style: 'Field Processing',
  previousStatement: null,
  generateCommand: function (block) {
    var awkCondition = '';
    const leftPartBlock = block.getInputTargetBlock('left_part');
    const rightPartBlock = block.getInputTargetBlock('right_part');

    const operator = block.getFieldValue('operator');
    var leftPart = '';
    var rightPart = '';

    // Retrieve the command for the left part block, if it exists
    if (leftPartBlock !== null) {
      leftPart = handleBlockByType(leftPartBlock);
    }
    if (leftPart === '') {
      leftPart = leftPartBlock.getFieldValue('TEXT');
    }
    console.log('leftPartBlock:', leftPart);

    // Retrieve the command for the right part block, if it exists
    if (rightPartBlock !== null) {
      rightPart = handleBlockByType(rightPartBlock);
    }

    console.log('leftPart:', leftPart);
    console.log('operator:', operator);
    console.log('rightPart:', rightPart);

    // Combine the parts to form the AWK condition
    awkCondition = leftPart + ' ' + operator + ' ' + rightPart;

    return awkCondition;
  }
};

Blockly.defineBlocksWithJsonArray([conditionBlock]);
