var cdBlock = {
  type: 'cd',
  category: 'Filesystem Operations',
  unix_description: [
    {
      directory: './str'
    }
  ],
  message0: '%{BKY_CD} %1',
  args0: [
    {
      type: 'field_input',
      name: 'directory',
      text: '' // αρχικό κενό text για να ορίσει ο χρήστης το path
    }
  ],
  style: 'File and Directory Operations',
  tooltip: '%{BKY_CD_TOOLTIP}',
  helpUrl: '%{BKY_CD_HELPURL}' // Σύνδεσμος για περισσότερες πληροφορίες ή τεκμηρίωση.
};

// Εισάγουμε το block στο Blockly
Blockly.defineBlocksWithJsonArray([cdBlock]);
