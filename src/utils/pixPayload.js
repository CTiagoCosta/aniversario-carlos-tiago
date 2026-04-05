function crc16(str) {
  let crc = 0xffff
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1
      crc &= 0xffff
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0')
}

function field(id, value) {
  return `${id}${String(value.length).padStart(2, '0')}${value}`
}

/**
 * Generates a PIX "copia e cola" payload following the Banco Central EMV spec.
 * @param {string} key      - PIX key (CPF digits only, no formatting)
 * @param {string} name     - Merchant name (max 25 chars)
 * @param {string} city     - Merchant city (max 15 chars)
 * @param {number|null} amount - Transaction amount (null = open amount)
 */
export function buildPixPayload(key, name, city, amount = null) {
  const merchantInfo = field('26',
    field('00', 'br.gov.bcb.pix') +
    field('01', key)
  )

  const amountField = amount != null
    ? field('54', amount.toFixed(2))
    : ''

  const additionalData = field('62', field('05', '***'))

  const payload =
    '000201' +
    merchantInfo +
    field('52', '0000') +
    field('53', '986') +
    amountField +
    field('58', 'BR') +
    field('59', name.substring(0, 25).normalize('NFD').replace(/[\u0300-\u036f]/g, '')) +
    field('60', city.substring(0, 15).normalize('NFD').replace(/[\u0300-\u036f]/g, '')) +
    additionalData +
    '6304'

  return payload + crc16(payload)
}
