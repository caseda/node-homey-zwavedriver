'use strict';

module.exports = {
  get: 'SENSOR_MULTILEVEL_GET',
  getParser: () => ({
    'Sensor Type': 'Ultraviolet (v5)',
    Properties1: {
      Scale: 0,
    },
  }),
  report: 'SENSOR_MULTILEVEL_REPORT',
  reportParser: report => {
    if (
      report
      && report.hasOwnProperty('Sensor Type')
      && report.hasOwnProperty('Sensor Value (Parsed)')
    ) {
      if (report['Sensor Type'] === 'Ultraviolet (v5)') return report['Sensor Value (Parsed)'];
    }
    return null;
  },
};
