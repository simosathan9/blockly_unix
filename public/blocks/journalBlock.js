var journalBlock = {
  type: 'journal',
  message0: '%{BKY_JOURNAL} %1',
  unix_description: [
    {
      since: '-c',
      lines: '-n',
      desc: '-r'
    }
  ],
  message1: '%{BKY_TAIL_METRIC}',
  args1: [
    {
      type: 'field_input',
      name: 'since',
      text: 'today'
    }
  ],

  message2: 'Show logs until: %1',
  args2: [
    {
      type: 'field_input',
      name: 'until',
      text: ''
    }
  ],

  message3: 'Follow logs in real-time: %1',
  args3: [
    {
      type: 'field_checkbox',
      name: 'follow',
      checked: false
    }
  ],

  category: 'Network Operations',
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Query and filter the systemd journal logs',
  helpUrl: 'https://linux.die.net/man/1/journalctl'
};

Blockly.defineBlocksWithJsonArray([journalBlock]);
