var pingBlock = {
  type: 'ping',
  message0: '%{BKY_PING} to %1',
  unix_description: [
    {
      count: '-c ',
      interval: '-i ',
      timeout: '-W ',
      host: 'str '
    }
  ],

  args0: [
    {
      type: 'field_input',
      name: 'host',
      text: '8.8.8.8'
    }
  ],

  message1: 'Packet Count: %1',
  args1: [
    {
      type: 'field_number',
      name: 'count',
      value: 4
    }
  ],

  message2: 'Interval (seconds): %1',
  args2: [
    {
      type: 'field_number',
      name: 'interval',
      value: 1
    }
  ],

  message3: 'Timeout (seconds): %1',
  args3: [
    {
      type: 'field_number',
      name: 'timeout',
      value: 5
    }
  ],

  category: 'Network Operations',
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: 'Send ICMP ECHO_REQUEST to network hosts',
  helpUrl: 'https://linux.die.net/man/8/ping'
};

Blockly.defineBlocksWithJsonArray([pingBlock]);
