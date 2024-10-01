var sshBlock = {
  type: 'ssh',
  message0: '%{BKY_SSH}',
  category: 'Network Operations',
  unix_description: [
    {
      KEY: '-i str',
      PORT: '-p str',
      USER: 'str@',
      HOST: 'str'
    }
  ],
  message1: 'Private Key File %1',
  args1: [
    {
      type: 'field_input',
      name: 'KEY',
      text: '/path/to/key'
    }
  ],
  message2: '%{BKY_SSH_USER} %1',
  args2: [
    {
      type: 'field_input',
      name: 'USER',
      text: 'user'
    }
  ],
  message3: '%{BKY_SSH_HOST} %1',
  args3: [
    {
      type: 'field_input',
      name: 'HOST',
      text: 'host'
    }
  ],
  message4: '%{BKY_SSH_PORT} %1',
  args4: [
    {
      type: 'field_input',
      name: 'PORT',
      text: '22'
    }
  ],
  style: 'Network Operations',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip:
    'Ανοίγει ασφαλείς συνδέσεις δικτύου με δυνατότητα καθορισμού private key.',
  helpUrl: 'https://linux.die.net/man/1/ssh'
};

Blockly.defineBlocksWithJsonArray([sshBlock]);
