import { roundPrice } from './validateRoundPrice';



describe('Price function', () => {
  it('should change price to right format', () => {
    expect(roundPrice(232.10542, '%PRICE% kr')).toBe('232.11 kr');
  });

  it('should showcase the correct symbol', () => {
    expect(roundPrice(14, '$%PRICE%')).toBe('$14.00');
  });

  it('should do the right format and spacing', () => {
    expect(roundPrice(1024.2048, 'USD %PRICE%')).toBe('USD 1024.20');
  });


});
