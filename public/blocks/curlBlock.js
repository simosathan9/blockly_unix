var curlBlock = {
  type: 'curl',
  category: 'Network Operations',
  message0: 'curl %1',
  unix_description: [
    {
      url: 'curl %URL'
    }
  ],
  args0: [
    {
      type: 'field_input',
      name: 'URL',
      text: 'http://example.com'
    }
  ],
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Μεταφέρει δεδομένα από ή προς διακομιστές.',
  helpUrl: 'https://linux.die.net/man/1/curl'
};

Blockly.defineBlocksWithJsonArray([curlBlock]);
