describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3)
      assert.equal(sum(-10, 5), -5)
      assert.equal(sum(-10, 10), 0)
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1));

    });


    it('should convert string to number if input parameters is string', () => {
      assert.equal(sum('5', '1'), 6)
      assert.equal(sum(10, '1'), 11)
      assert.equal(sum('25', 5), 30)
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raising x to the n power', () => {
      assert.equal(pow(2,3), 8)
      assert.equal(pow(3,3),27)
    });
    it('should return 1 to n equal 0', () => {
      assert.equal(pow(6,0), 1)
    });


  });

  describe('Test suite for testing removeByName function', () => {
     it('should remove some element from array', () => {
    const list = ['apple', 'xiomi', 'samsung'];
    const result = removeByName(list, 'xiomi');
    assert.deepEqual(result, ['apple', 'samsung']);
  });

  it('should return same array if element not found', () => {
    const list = ['apple', 'xiomi', 'samsung'];
    const result = removeByName(list, 'asus');
    assert.deepEqual(result, ['apple', 'xiomi', 'samsung']);
  });
  });
});