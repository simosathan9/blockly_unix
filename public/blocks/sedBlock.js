var sedBlock = {
  type: 'sed',
  category: 'Text processing',
  unix_description: [
    {
      regPattern: "'s/patt ",
      regReplaceText: "str/'",
      regex: '-E',
      globally: 'g'
    }
  ],
  message0: '%{BKY_SED}',
  message1: '%{BKY_SED_REGEX}',
  args1: [
    {
      type: 'hidden',
      name: 'regex',
      checked: true
    }
  ],
  message2: '%{BKY_SED_PATTERN}',
  args2: [
    {
      type: 'input_statement',
      name: 'regPattern',
      check: 'String'
    }
  ],
  message3: '%{BKY_SED_TEXT}',
  args3: [
    {
      type: 'field_input',
      name: 'regReplaceText',
      text: 'changeText' // default text for the input
    }
  ],
  message4: '%{BKY_SED_INALL}',
  args4: [
    {
      type: 'field_checkbox',
      name: 'globally',
      checked: false // by default it's disabled
    }
  ],

  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_SED_TOOLTIP}',
  helpUrl: '%{BKY_SED_HELPURL}', // URL to further information or documentation.
  generateCommand: function (block) {
    let sedCommand = handleBlock(block); // Basic sed command

    // Handle pattern and replacement
    let patternBlock = block.getInputTargetBlock('regPattern');
    let replacementText = block.getFieldValue('regReplaceText');

    if (!patternBlock) {
      console.error('Pattern block is missing');
      return '';
    }

    let pattern = patternBlock.getFieldValue('regPattern');
    if (typeof replacementText === 'undefined' || replacementText === '') {
      console.error('Replacement text is missing or empty');
      return '';
    }

    // Escape slashes in pattern and replacement
    pattern = pattern.replace(/\//g, '\\/');
    replacementText = replacementText.replace(/\//g, '\\/');
    const hasGlobalFlag = block.getFieldValue('globally') === 'TRUE';

    sedCommand = `sed -E 's/${pattern}/${replacementText}/${hasGlobalFlag ? 'g' : ''}'`;

    let previousBlock = block.getPreviousBlock();
    if (previousBlock && previousBlock.type === 'filenamesCreate') {
      const filenames = handleFilenamesBlocks(previousBlock);
      sedCommand += ` ${filenames}`;
    }

    generatedCommand = sedCommand;
    return generatedCommand;
  }
};

Blockly.defineBlocksWithJsonArray([sedBlock]);
