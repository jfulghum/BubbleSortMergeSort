xdescribe ('Bubble Sort', function() {
  beforeAll(function() {
     spyOn(window, 'swap').and.callThrough();
 })
 it('swaps when number is bigger than comparison number', function(){
     bubbleSort([1,3,2])
     expect(window.swap.calls.count()).toEqual(1);
 })

 it('handles an empty array', function(){
   expect( bubbleSort([]) ).toEqual( [] );
 });

 it('handles a single item array', function() {
     expect( bubbleSort([2]) ).toEqual( [2] );
 })

 it('handles a multiple item array', function() {
     expect( bubbleSort([3, 5, 2, 7])).toEqual([2, 3, 5, 7]);
 })

 it('handles array with negative integers and 0', function() {
     expect( bubbleSort([10, 7, -2, 6, 1]) ).toEqual( [-2, 1, 6, 7, 10] );
 })

 it('returns an array', function() {
     expect(Array.isArray(bubbleSort([8, 3, 5]))).toBe(true);
 })

});