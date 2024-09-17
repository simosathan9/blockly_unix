var mkdirBlock = {
  type: 'mkdir',
  category: 'Directory Operations',
  unix_description: [
    {
      parents: '-p'
    }
  ],
  message0: '%{BKY_MKDIR_MESSAGE}',
  message1: '%{BKY_MKDIR_SAME_LEVEL_DIRECTORIES}',
  message2: '%{BKY_MKDIR_MULTIPLE_DIRECTORIES}',
  message3: '%{BKY_MKDIR_CREATE_SUBDIRECTORIES}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'parents',
      checked: false // by default it's disabled
    }
  ],
  message4: '%{BKY_MKDIR_WRITE_DIRECTORY}',
  args4: [
    {
      type: 'field_input',
      name: 'directory',
      text: '............'
    }
  ],
  style: 'Directory Operations',
  nextStatement: 'Action',
  tooltip: '%{BKY_MKDIR_TOOLTIP}',
  helpUrl: '' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([mkdirBlock]);
