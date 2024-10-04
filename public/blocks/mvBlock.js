var mvBlock = {
  type: 'mv',
  category: 'Filesystem Operations',
  message0: '%{BKY_MV_MESSAGE}', // Correctly references %1 (SOURCE) and %2 (DEST)
  unix_description: [
    {
      not_prompt_confirmation: '-f',
      prompt_confirmation: '-i',
      not_overwrite: '-n'
    }
  ],
  message1: '%{BKY_MV_NOT_PROMPT_CONFIRMATION}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'not_prompt_confirmation',
      checked: false
    }
  ],
  message2: '%{BKY_MV_PROMPT_CONFIRMATION}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'prompt_confirmation',
      checked: false
    }
  ],
  message3: '%{BKY_MV_NOT_OVERWRITE}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'not_overwrite',
      checked: false
    }
  ],
  message4: '%{BKY_MV_SOURCE}: %1 %{BKY_MV_DEST}: %2',
  args4: [
    {
      type: 'input_value',
      name: 'SOURCE',
      text: 'source'
    },
    {
      type: 'input_value',
      name: 'DEST',
      text: 'destination'
    }
  ],
  style: 'Filesystem Operations',
  tooltip: 'Μετακινεί ή μετονομάζει αρχεία.',
  helpUrl: 'https://linux.die.net/man/1/mv',
  generateCommand: function (block) {
    let mvCommand = 'mv '; // Start the mv command
    // Handle options
    const notPromptConfirmation =
      block.getFieldValue('not_prompt_confirmation') === 'TRUE';
    const promptConfirmation =
      block.getFieldValue('prompt_confirmation') === 'TRUE';
    const notOverwrite = block.getFieldValue('not_overwrite') === 'TRUE';
    if (notPromptConfirmation) mvCommand += '-f '; // Add -f for no prompt
    if (promptConfirmation) mvCommand += '-i '; // Add -i for prompt
    if (notOverwrite) mvCommand += '-n '; // Add -n for no overwrite
    // Get source and destination blocks
    const sourceArgsBlock = block.getInputTargetBlock('SOURCE');
    const targetArgsBlock = block.getInputTargetBlock('DEST');
    // Append arguments (source and destination paths)
    mvCommand +=
      handleArgumentsBlocks(sourceArgsBlock) +
      ' ' +
      handleArgumentsBlocks(targetArgsBlock);
    return mvCommand; // Return the generated mv command
  }
};

Blockly.defineBlocksWithJsonArray([mvBlock]);
