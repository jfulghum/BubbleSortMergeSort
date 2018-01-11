xdescribe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,3,4,5])).toEqual([[2,3],[4,5]])
  });
  it('is able to split an array into two halves when its an odd number', function() {
    expect(split([2,3,3,4,5])).toEqual([[2,3],[3,4,5]])
  });
});


xdescribe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1],[2])).toEqual([1,2])
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([2],[1])).toEqual([1,2])
  });
  it('is able to merge empty array', function(){
    expect(merge([],[1])).toEqual([1]);
  });
  
  it('this is a test for merge', function(){
    expect(merge([1, 2, 7, 8],[3, 6])).toEqual([1, 2, 3, 6, 7, 8]);
  });
  
  
});


describe('mergeSort function', function(){
  it('this is a test', function(){
    // expect(merge([1, 2, 7, 8],[3, 6])).toEqual([1, 2, 3, 6, 7, 8]);
    expect(mergeSort([6, 3, 7, 5])).toEqual([3, 5, 6, 7]);
  });

})