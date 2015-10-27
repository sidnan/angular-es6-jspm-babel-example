'use strict';

import {OneDirective} from './one.js';

describe('directive: one', () => {

    let mockOneDirective;

    beforeEach(function() {
      mockOneDirective = OneDirective.directiveFactory();
    });

    it('should have template in it', function () {
      expect(mockOneDirective.template).toBe('<h1>this is just the beginning...</h1>');
    });

    it('should have restrict in it', function () {
      expect(mockOneDirective.restrict).toBe('AE');
    });
});
