var fileEndStartBlock = {
  type: 'fileEndStart',
  category: 'Function inputs',
  unix_description: [
    {
      starts: 'str*',
      ends: '*str'
    }
  ],
  message0:
    '%{BKY_FILE_END_START_WILDCHARS} %1 %{BKY_FILE_END_START_WILDCHARS_WITH}  %2',
  args0: [
    {
      type: 'field_dropdown',
      name: 'metric_type',
      options: [
        ['starts', 'starts'],
        ['ends', 'ends']
      ]
    },
    {
      type: 'field_input',
      name: 'FILENAME',
      text: '....' // empty text for user to define filename
    }
  ],

  output: 'fileWildcard',
  style: 'Function inputs',
  tooltip: '%{BKY_FILE_END_START_WILDCHARS_TOOLTIP}',
  helpUrl: '%{BKY_FILE_END_START_WILDCHARS_HELPURL} ' // URL to further information or documentation.
};

Blockly.defineBlocksWithJsonArray([fileEndStartBlock]);
