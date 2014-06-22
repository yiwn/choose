var expect = require('chai').expect;

var choose = require('../index.js');

describe('Choose', function(){
    var a = {
            k: 1,
            l: [1, 2, 3],
            m: null,
            n: false
        };

    it('should support both "picking" and "omitting"', function(){
        expect(choose(a, ['l', 'n']))
            .to.eql({
                l: [1, 2, 3],
                n: false
            });

        expect(choose(a, ['l', 'n'], false))
            .to.eql({
                k: 1,
                m: null
            });
    });

    it('should return copy of element, when no `keys` specified', function(){
        expect(choose(a, null, false))
            .to.eql(a)
            .to.not.equal(a);
    });

    it('should have shortcuts for special tasks', function(){
        expect(choose.pick(a, 'k', 'l'))
            .to.eql(choose(a, ['k', 'l']));
        expect(choose.pick(a, ['k', 'l']))
            .to.eql(choose(a, ['k', 'l']));

        expect(choose.omit(a, 'k', 'l'))
            .to.eql(choose(a, ['k', 'l'], false));
        expect(choose.omit(a, ['k', 'l']))
            .to.eql(choose(a, ['k', 'l'], false));
    });
});
