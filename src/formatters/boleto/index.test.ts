import { formatBoleto } from '..';
import { BOLETO_CONVENIO_LENGTH, BOLETO_LENGTH } from '.';

describe('formatBoleto', () => {
  test('should format boleto with mask', () => {
    expect(formatBoleto('')).toBe('');
    expect(formatBoleto('1')).toBe('1');
    expect(formatBoleto('10')).toBe('10');
    expect(formatBoleto('104')).toBe('104');
    expect(formatBoleto('1049')).toBe('1049');
    expect(formatBoleto('10491')).toBe('10491');
    expect(formatBoleto('104914')).toBe('10491.4');
    expect(formatBoleto('1049144')).toBe('10491.44');
    expect(formatBoleto('10491443')).toBe('10491.443');
    expect(formatBoleto('104914433')).toBe('10491.4433');
    expect(formatBoleto('1049144338')).toBe('10491.44338');
    expect(formatBoleto('10491443385')).toBe('10491.44338 5');
    expect(formatBoleto('104914433855')).toBe('10491.44338 55');
    expect(formatBoleto('1049144338551')).toBe('10491.44338 551');
    expect(formatBoleto('10491443385511')).toBe('10491.44338 5511');
    expect(formatBoleto('104914433855119')).toBe('10491.44338 55119');
    expect(formatBoleto('1049144338551190')).toBe('10491.44338 55119.0');
    expect(formatBoleto('10491443385511900')).toBe('10491.44338 55119.00');
    expect(formatBoleto('104914433855119000')).toBe('10491.44338 55119.000');
    expect(formatBoleto('1049144338551190000')).toBe('10491.44338 55119.0000');
    expect(formatBoleto('10491443385511900000')).toBe(
      '10491.44338 55119.00000'
    );
    expect(formatBoleto('104914433855119000002')).toBe(
      '10491.44338 55119.000002'
    );
    expect(formatBoleto('1049144338551190000020')).toBe(
      '10491.44338 55119.000002 0'
    );
    expect(formatBoleto('10491443385511900000200')).toBe(
      '10491.44338 55119.000002 00'
    );
    expect(formatBoleto('104914433855119000002000')).toBe(
      '10491.44338 55119.000002 000'
    );
    expect(formatBoleto('1049144338551190000020000')).toBe(
      '10491.44338 55119.000002 0000'
    );
    expect(formatBoleto('10491443385511900000200000')).toBe(
      '10491.44338 55119.000002 00000'
    );
    expect(formatBoleto('104914433855119000002000000')).toBe(
      '10491.44338 55119.000002 00000.0'
    );
    expect(formatBoleto('1049144338551190000020000000')).toBe(
      '10491.44338 55119.000002 00000.00'
    );
    expect(formatBoleto('10491443385511900000200000000')).toBe(
      '10491.44338 55119.000002 00000.000'
    );
    expect(formatBoleto('104914433855119000002000000001')).toBe(
      '10491.44338 55119.000002 00000.0001'
    );
    expect(formatBoleto('1049144338551190000020000000014')).toBe(
      '10491.44338 55119.000002 00000.00014'
    );
    expect(formatBoleto('10491443385511900000200000000141')).toBe(
      '10491.44338 55119.000002 00000.000141'
    );
    expect(formatBoleto('104914433855119000002000000001413')).toBe(
      '10491.44338 55119.000002 00000.000141 3'
    );
    expect(formatBoleto('1049144338551190000020000000014132')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2'
    );
    expect(formatBoleto('10491443385511900000200000000141325')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25'
    );
    expect(formatBoleto('104914433855119000002000000001413252')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252'
    );
    expect(formatBoleto('1049144338551190000020000000014132523')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523'
    );
    expect(formatBoleto('10491443385511900000200000000141325230')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230'
    );
    expect(formatBoleto('104914433855119000002000000001413252300')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252300'
    );
    expect(formatBoleto('1049144338551190000020000000014132523000')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523000'
    );
    expect(formatBoleto('10491443385511900000200000000141325230000')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000'
    );
    expect(formatBoleto('104914433855119000002000000001413252300000')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252300000'
    );
    expect(formatBoleto('1049144338551190000020000000014132523000009')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523000009'
    );
    expect(formatBoleto('10491443385511900000200000000141325230000093')).toBe(
      '10491.44338 55119.000002 00000.000141 3 25230000093'
    );
    expect(formatBoleto('104914433855119000002000000001413252300000934')).toBe(
      '10491.44338 55119.000002 00000.000141 3 252300000934'
    );
    expect(formatBoleto('1049144338551190000020000000014132523000009342')).toBe(
      '10491.44338 55119.000002 00000.000141 3 2523000009342'
    );
    expect(
      formatBoleto('10491443385511900000200000000141325230000093423')
    ).toBe('10491.44338 55119.000002 00000.000141 3 25230000093423');
  });

  test('should format boleto convênio with mask', () => {
    expect(formatBoleto('')).toBe('');
    expect(formatBoleto('8')).toBe('8');
    expect(formatBoleto('83')).toBe('83');
    expect(formatBoleto('836')).toBe('836');
    expect(formatBoleto('8364')).toBe('8364');
    expect(formatBoleto('83640')).toBe('83640');
    expect(formatBoleto('836400')).toBe('836400');
    expect(formatBoleto('8364000')).toBe('8364000');
    expect(formatBoleto('83640000')).toBe('83640000');
    expect(formatBoleto('836400001')).toBe('836400001');
    expect(formatBoleto('8364000017')).toBe('8364000017');
    expect(formatBoleto('83640000178')).toBe('83640000178');
    expect(formatBoleto('836400001787')).toBe('836400001787');
    expect(formatBoleto('8364000017873')).toBe('836400001787.3');
    expect(formatBoleto('83640000178733')).toBe('836400001787.33');
    expect(formatBoleto('836400001787335')).toBe('836400001787.335');
    expect(formatBoleto('8364000017873356')).toBe('836400001787.3356');
    expect(formatBoleto('83640000178733560')).toBe('836400001787.33560');
    expect(formatBoleto('836400001787335600')).toBe('836400001787.335600');
    expect(formatBoleto('8364000017873356004')).toBe('836400001787.3356004');
    expect(formatBoleto('83640000178733560045')).toBe('836400001787.33560045');
    expect(formatBoleto('836400001787335600450')).toBe(
      '836400001787.335600450'
    );
    expect(formatBoleto('8364000017873356004500')).toBe(
      '836400001787.3356004500'
    );
    expect(formatBoleto('83640000178733560045000')).toBe(
      '836400001787.33560045000'
    );
    expect(formatBoleto('836400001787335600450001')).toBe(
      '836400001787.335600450001'
    );
    expect(formatBoleto('8364000017873356004500010')).toBe(
      '836400001787.335600450001.0'
    );
    expect(formatBoleto('83640000178733560045000100')).toBe(
      '836400001787.335600450001.00'
    );
    expect(formatBoleto('836400001787335600450001000')).toBe(
      '836400001787.335600450001.000'
    );
    expect(formatBoleto('8364000017873356004500010000')).toBe(
      '836400001787.335600450001.0000'
    );
    expect(formatBoleto('83640000178733560045000100000')).toBe(
      '836400001787.335600450001.00000'
    );
    expect(formatBoleto('836400001787335600450001000000')).toBe(
      '836400001787.335600450001.000000'
    );
    expect(formatBoleto('8364000017873356004500010000000')).toBe(
      '836400001787.335600450001.0000000'
    );
    expect(formatBoleto('83640000178733560045000100000000')).toBe(
      '836400001787.335600450001.00000000'
    );
    expect(formatBoleto('836400001787335600450001000000002')).toBe(
      '836400001787.335600450001.000000002'
    );
    expect(formatBoleto('8364000017873356004500010000000025')).toBe(
      '836400001787.335600450001.0000000025'
    );
    expect(formatBoleto('83640000178733560045000100000000250')).toBe(
      '836400001787.335600450001.00000000250'
    );
    expect(formatBoleto('836400001787335600450001000000002501')).toBe(
      '836400001787.335600450001.000000002501'
    );
    expect(formatBoleto('8364000017873356004500010000000025015')).toBe(
      '836400001787.335600450001.000000002501.5'
    );
    expect(formatBoleto('83640000178733560045000100000000250151')).toBe(
      '836400001787.335600450001.000000002501.51'
    );
    expect(formatBoleto('836400001787335600450001000000002501510')).toBe(
      '836400001787.335600450001.000000002501.510'
    );
    expect(formatBoleto('8364000017873356004500010000000025015100')).toBe(
      '836400001787.335600450001.000000002501.5100'
    );
    expect(formatBoleto('83640000178733560045000100000000250151000')).toBe(
      '836400001787.335600450001.000000002501.51000'
    );
    expect(formatBoleto('836400001787335600450001000000002501510006')).toBe(
      '836400001787.335600450001.000000002501.510006'
    );
    expect(formatBoleto('8364000017873356004500010000000025015100061')).toBe(
      '836400001787.335600450001.000000002501.5100061'
    );
    expect(formatBoleto('83640000178733560045000100000000250151000615')).toBe(
      '836400001787.335600450001.000000002501.51000615'
    );
    expect(formatBoleto('836400001787335600450001000000002501510006150')).toBe(
      '836400001787.335600450001.000000002501.510006150'
    );
    expect(formatBoleto('8364000017873356004500010000000025015100061501')).toBe(
      '836400001787.335600450001.000000002501.5100061501'
    );
    expect(
      formatBoleto('83640000178733560045000100000000250151000615015')
    ).toBe('836400001787.335600450001.000000002501.51000615015');
    expect(
      formatBoleto('836400001787335600450001000000002501510006150153')
    ).toBe('836400001787.335600450001.000000002501.510006150153');
  });

  test(`shouldn't add digits after the boleto length (${BOLETO_LENGTH})`, () => {
    expect(
      formatBoleto('10491443385511900000200000000141325230000093423123123123')
    ).toBe('10491.44338 55119.000002 00000.000141 3 25230000093423');
  });

  test(`shouldn't add digits after the boleto length (${BOLETO_CONVENIO_LENGTH})`, () => {
    expect(
      formatBoleto('8364000017873356004500010000000025015100061501531231231')
    ).toBe('836400001787.335600450001.000000002501.510006150153');
  });

  test('should remove all non numeric characters boleto', () => {
    expect(
      formatBoleto(
        '10491.44A338 55119.000002? ABC00000.000?141 3 25230000093423'
      )
    ).toBe('10491.44338 55119.000002 00000.000141 3 25230000093423');
  });

  test('should remove all non numeric characters boleto convenio', () => {
    expect(
      formatBoleto('836400001787?.335600450001ABC.000000002501A.5100061?50153')
    ).toBe('836400001787.335600450001.000000002501.510006150153');
  });
});
