var regBackreferenceBlock = {
  type: 'regBackreference',
  category: 'Regular Expressions',
  unix_description: [
    {
      1: '\\1',
      2: '\\2',
      3: '\\3',
      4: '\\4',
      5: '\\5',
      6: '\\6',
      7: '\\7',
      8: '\\8',
      9: '\\9'
    }
  ],
  message0: 'Backreference to group %1',
  args0: [
    {
      type: 'field_dropdown', // Dropdown για επιλογή του αριθμού αναφοράς
      name: 'BACKREF_NUMBER',
      options: [
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['9', '9']
      ]
    }
  ],
  style: 'Regular Expressions',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'References a previously matched group using \\1, \\2, etc.',
  helpUrl:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#backreferences'
};

Blockly.defineBlocksWithJsonArray([regBackreferenceBlock]);
