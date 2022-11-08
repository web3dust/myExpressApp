module.exports = {
    all: true,
    include: ['./**/*.js'],
    reporter: ['lcov'],
    cwd: '.',
    'temp-dir': '.nyc_output',
    'report-dir': 'coverage'
};
