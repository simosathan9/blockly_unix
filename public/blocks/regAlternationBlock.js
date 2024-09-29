var regAlternationBlock = {
  type: 'regAlternation', // Ορισμός του τύπου του block
  category: 'Regular Expressions',
  unix_description: [
    {
      LEFT_PATTERN: 'patt |',

      RIGHT_PATTERN: 'patt'
    }
  ],
  message0: '%1', // Μήνυμα που εμφανίζει το | ανάμεσα στις δύο εισόδους
  args0: [
    {
      type: 'input_statement',
      name: 'LEFT_PATTERN', // Πρώτη εσοχή για την αριστερή έκφραση
      check: 'String'
    }
  ],

  message1: ' Logical or ',

  message2: '%1',
  args2: [
    {
      type: 'input_statement',
      name: 'RIGHT_PATTERN', // Δεύτερη εσοχή για τη δεξιά έκφραση
      check: 'String'
    }
  ],
  style: 'Regular Expressions',
  output: 'String',
  previousStatement: null,
  nextStatement: null,
  tooltip:
    'Matches either the pattern on the left or the pattern on the right. Use | for logical "or".',
  helpUrl:
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#logical_or' // URL για περισσότερες πληροφορίες
};

Blockly.defineBlocksWithJsonArray([regAlternationBlock]);
