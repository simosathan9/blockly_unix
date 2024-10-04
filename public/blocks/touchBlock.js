var touchBlock = {
  type: 'touch',

  category: 'Filesystem Operations',
  unix_description: [
    {
      argument: 'arg',
      not_create_file: '-c',
      change_time_t: '-t str',
      change_time_d: '-d str',
      access_time: '-a',
      modification_time: '-m'
    }
  ],
  message0: '%{BKY_TOUCH}',
  args0: [
    {
      type: 'input_value',
      name: 'argument',
      check: 'String'
    }
  ],
  message1: '%{BKY_TOUCH_NOT_CREATE_FILE}',
  args1: [
    {
      type: 'field_checkbox',
      name: 'not_create_file',
      checked: false
    }
  ],
  message2: '%{BKY_TOUCH_CHANGE_ACCESS_TIME}',
  args2: [
    {
      type: 'field_checkbox',
      name: 'access_time',
      checked: false
    }
  ],
  message3: '%{BKY_TOUCH_CHANGE_MODIFICATION_TIME}',
  args3: [
    {
      type: 'field_checkbox',
      name: 'modification_time',
      checked: false
    }
  ],
  message4: '%{BKY_TOUCH_SPECIFY_TIME_D}',
  message5: '%{BKY_TOUCH_SPECIFY_TIME_FORMAT_D}',
  args5: [
    {
      type: 'field_input',
      name: 'change_time_d',
      text: new Date().toISOString().slice(0, 19).replace('T', ' '),
      check: 'String'
    }
  ],

  extensions: ['validate_touch_time_d', 'restrict_touch_to_argumentsCreate'],
  style: 'Filesystem Operations',
  tooltip: '%{BKY_TOUCH_TOOLTIP}',
  helpUrl: '%{BKY_TOUCH_HELPURL}', // URL to further information or documentation.
  generateCommand: function (block) {
    let touchCommand = 'touch'; // Start with the basic touch command
    // Check each option and append to the command if selected
    const notCreateFile = block.getFieldValue('not_create_file') === 'TRUE';
    const changeAccessTime = block.getFieldValue('access_time') === 'TRUE';
    const changeModificationTime =
      block.getFieldValue('modification_time') === 'TRUE';
    const rawTimestamp = block.getFieldValue('change_time_d');
    const argumentBlock = block.getInputTargetBlock('argument');
    if (notCreateFile) touchCommand += ' -c';
    if (changeAccessTime) touchCommand += ' -a';
    if (changeModificationTime) touchCommand += ' -m';
    if (rawTimestamp) {
      const formattedTimestamp = rawTimestamp.replace(' ', 'T');
      touchCommand += ` -d ${formattedTimestamp}`;
    }
    generatedCommand =
      touchCommand + ' ' + handleArgumentsBlocks(argumentBlock);
    return generatedCommand;
  }
};

Blockly.defineBlocksWithJsonArray([touchBlock]);

Blockly.Extensions.register('validate_touch_time_d', function () {
  this.getField('change_time_d').setValidator(function (input) {
    // Define regex patterns to match different valid formats
    var patterns = [
      /^$/, // Empty string pattern
      /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])\s(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(Z)?$/, // YYYY-MM-DD hh:mm:SS[tz]
      /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(Z)?$/ // YYYY-MM-DDThh:mm:SS[tz]
    ];

    // Check if input matches one of the valid patterns
    var isValid = patterns.some(function (pattern) {
      return pattern.test(input);
    });

    if (!isValid) {
      return null; // Invalid input, reject
    }

    // Extract components from input (no replacement here)
    var parts = input.split('T');
    var datePart = parts[0];
    var timePart = (parts[1] || '').split('.')[0]; // Remove fractional seconds part
    var tzPart = (parts[1] || '').includes('Z') ? 'Z' : '';

    // Handle date part
    var dateParts = datePart.split('-');
    var year = dateParts[0];
    var month = dateParts[1];
    var day = dateParts[2];

    // Handle time part
    var timeParts = timePart.split(':');
    var hour = timeParts[0] || '00';
    var minute = timeParts[1] || '00';
    var second = timeParts[2] || '00';

    // Validate ranges for year, month, day, hour, minute, and second
    if (
      month < '01' ||
      month > '12' ||
      day < '01' ||
      day > '31' ||
      hour < '00' ||
      hour > '23' ||
      minute < '00' ||
      minute > '59' ||
      second < '00' ||
      second > '59'
    ) {
      return null; // Invalid input: reject
    }

    // Check day validity for the given month and year (leap year handling)
    var daysInMonth = new Date(year, parseInt(month, 10), 0).getDate();
    if (parseInt(day, 10) > daysInMonth) {
      return null; // Invalid day for the given month
    }

    // Optional time zone part validation
    if (tzPart && tzPart !== 'Z') {
      return null; // Invalid time zone designator, should be 'Z' if present
    }

    // Replace space with 'T' only when returning the valid input
    return input;
  });
});
