var argumentBlock = {
  type: 'argument',
  category: 'Function inputs',
  message0: '%{BKY_ARGUMENT} %1',
  args0: [
    {
      type: 'field_input',
      name: 'ARGUMENT',
      text: 'argument' // default text for the input
    }
  ],
  extensions: ['restrict_args_block'],
  output: 'String',
  style: 'Function inputs',
  tooltip: '%{BKY_ARGUMENT_TOOLTIP}',
  helpUrl: '%{BKY_ARGUMENT_HELPURL}' // URL για περαιτέρω πληροφορίες ή τεκμηρίωση.
};
Blockly.defineBlocksWithJsonArray([argumentBlock]);