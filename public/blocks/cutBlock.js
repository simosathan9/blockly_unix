var cutBlock = {
  type: 'cut',
  category: 'Text Processing',
  unix_description: [
    {
      delimiter: "-d 'str'",
      specificColumns: '-f str',
      colStart: '-f str',
      colEnd: '-str',
      specificCharacters: '-c str',
      charsStart: '-c str',
      charsEnd: '-str'
    }
  ],
  message0: '%{BKY_CUT}\n',
  message1: '%{BKY_CUT_DELIMITER} %1\n',
  args1: [
    {
      type: 'field_input',
      name: 'delimiter',
      text: ''
    }
  ],
  message2: '%{BKY_CUT_DEFINE_COLUMNS} %1\n',
  args2: [
    {
      type: 'field_input',
      name: 'columns',
      text: ''
    }
  ],
  message3: '%{BKY_CUT_COLUMNS_START} %1 %{BKY_CUT_COLUMNS_END} %2\n',
  args3: [
    {
      type: 'field_input',
      name: 'colsStart',
      text: ''
    },
    {
      type: 'field_input',
      name: 'colsEnd',
      text: ''
    }
  ],
  message4: '%{BKY_CUT_SPECIFIC_CHARACTERS} %1\n',
  args4: [
    {
      type: 'field_input',
      name: 'individualChars',
      text: ''
    }
  ],
  message5: '%{BKY_CUT_START} %1 %{BKY_CUT_END} %2',
  args5: [
    {
      type: 'field_input',
      name: 'charsStart',
      text: ''
    },
    {
      type: 'field_input',
      name: 'charsEnd',
      text: ''
    }
  ],
  style: 'Text Processing',
  previousStatement: 'Action',
  nextStatement: 'Action',
  tooltip: '%{BKY_CUT_TOOLTIP}',
  extensions: [
    'cut_validation',
    'integer_validation',
    'disallow_multiple_filenames'
  ],
  helpUrl: '%{BKY_CUT_HELPURL}', // URL to further information or documentation.

  generateCommand: function (block) {
    let cutCommand = 'cut '; // Start with the basic 'cut' command

    // Handle the delimiter
    const delimiter = block.getFieldValue('delimiter').trim();
    if (delimiter !== '') {
      cutCommand += `-d '${delimiter}' `;
    }

    // Handle the columns
    const columns = block.getFieldValue('columns').trim();
    let formattedColumns = '';
    if (columns !== '') {
      // Normalize the input by replacing spaces with commas
      formattedColumns = columns.replace(/\s+/g, ','); // Replace all spaces with commas

      // Split the columns by comma, trim each column, and filter out empty entries
      formattedColumns = formattedColumns
        .split(',')
        .map((col) => col.trim())
        .filter((col) => col !== '')
        .join(','); // Join them back with a single comma
    }

    const colsStart = block.getFieldValue('colsStart').trim();
    const colsEnd = block.getFieldValue('colsEnd').trim();
    let colRange = '';

    if (colsStart !== '' && colsEnd !== '') {
      colRange = `${colsStart}-${colsEnd}`;
    } else if (colsStart !== '') {
      colRange = `${colsStart}-`;
      if (colsEnd !== '') {
        colRange += `-${colsEnd}`;
      }
    }

    const allCols = [];
    if (formattedColumns) {
      allCols.push(...formattedColumns.split(',').map((c) => c.trim()));
    }
    if (colRange) {
      allCols.push(colRange);
    }

    const uniqueCols = [...new Set(allCols)].join(',');
    if (uniqueCols !== '') {
      cutCommand += `-f ${uniqueCols} `;
    }

    let individualChars = block.getFieldValue('individualChars').trim();
    if (individualChars !== '') {
      // Normalize the input by replacing spaces with commas
      individualChars = individualChars.replace(/\s+/g, ','); // Replace all spaces with commas

      // Split the characters by comma, trim each character, and filter out empty entries
      individualChars = individualChars
        .split(',')
        .map((char) => char.trim())
        .filter((char) => char !== '')
        .join(','); // Join them back with a single comma
    }

    // Handle character ranges (start and end)
    const charsStart = block.getFieldValue('charsStart').trim();
    const charsEnd = block.getFieldValue('charsEnd').trim();
    let charRange = '';

    if (charsStart !== '' && charsEnd !== '') {
      charRange = `${charsStart}-${charsEnd}`;
    } else if (charsStart !== '') {
      charRange = `${charsStart}-`;
      if (charsEnd !== '') {
        charRange += `-${charsEnd}`;
      }
    }

    // Combine individual characters and character ranges
    const allChars = [];
    if (individualChars) {
      allChars.push(...individualChars.split(',').map((c) => c.trim()));
    }
    if (charRange) {
      allChars.push(charRange);
    }

    // Join characters with commas and ensure no duplicates
    const uniqueChars = [...new Set(allChars)].join(',');

    // Append the individual characters or character range if valid
    if (uniqueChars !== '') {
      cutCommand += `-c ${uniqueChars} `;
    }

    // Append the input file(s) if there are any previous blocks connected
    let previousBlock = block.getPreviousBlock();
    if (previousBlock && previousBlock.type === 'filenamesCreate') {
      const filenames = handleFilenamesBlocks(previousBlock); // Handle the filenames
      cutCommand += filenames;
    }

    return cutCommand.trim(); // Return the fully generated command
  }
};

Blockly.defineBlocksWithJsonArray([cutBlock]);

Blockly.Extensions.register('cut_validation', function () {
  var thisBlock = this;

  // Register a change listener on the workspace
  thisBlock.workspace.addChangeListener(function (event) {
    // Check if the change involves this block
    if (event.blockId === thisBlock.id) {
      // Validate based on the conditions you specified
      var columnsValue = thisBlock.getFieldValue('columns').trim();
      var charsStartValue = thisBlock.getFieldValue('charsStart').trim();
      var charsEndValue = thisBlock.getFieldValue('charsEnd').trim();
      var delimiterValue = thisBlock.getFieldValue('delimiter').trim();

      if (
        columnsValue !== '' &&
        (charsStartValue !== '' || charsEndValue !== '')
      ) {
        // Set warning text since conditions are violated.
        thisBlock.setWarningText(
          'Cannot choose columns and chars at the same time.\n' +
            'Columns are used for cut in files, chars are used for cut in strings'
        );
      } else if (
        delimiterValue !== '' &&
        (charsStartValue !== '' || charsEndValue !== '')
      ) {
        // Set warning text since conditions are violated.
        thisBlock.setWarningText(
          'Cannot choose delimiter and chars at the same time.\n' +
            'Delimiter is used for cut in files, chars are used for cut in strings'
        );
      } else {
        // Clear warning text since conditions are satisfied.
        thisBlock.setWarningText(null);
      }
    }
  });
});
