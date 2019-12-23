const regexNames = require('../src');

describe('Basic test', () => {
  test('test pkg.dependencies', () => {
    var names = regexNames(/\app-/);
    expect(names).toEqual(['app-root-path']);
  });

  test('api: options.target', () => {
    var names = regexNames(/\@feizheng/, { target: 'devDependencies' });
    expect(names).toEqual(['@feizheng/next-nice-comments', '@feizheng/noop']);
  });

  test('api: options.exclude', () => {
    var names = regexNames(/\@feizheng/, {
      target: 'devDependencies',
      exclude: /\@feizheng\/noop/
    });
    expect(names).toEqual(['@feizheng/next-nice-comments']);
  });
});
