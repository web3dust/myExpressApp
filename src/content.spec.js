const content = require('./content');
let title = content.getTitle();
// let sum = content.sum( 1, 2);
// console.log(sum);

describe('Content', () => {
    describe('root', () => {
      it('should return "Hello allan."', () => {
        expect(title).toBe('Hello allan.');
      });
    });
});

describe('Content', () => {
  describe('root', () => {
    it('should return "3"', () => {
      expect(content.sum(1, 2)).toBe(3);
    });
  });
});
  