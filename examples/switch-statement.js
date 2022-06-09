import check from 'checksum-lib' // library

function checkChecksum(checksum, algorithm) {
  switch (algorithm) {
    case 'SHA-0':
    case 'SHA0':
      return check.sha0(checksum)
    case 'SHA-1':
    case 'SHA1':
      return check.sha1(checksum)
    case 'MD5':
      return check.md5(checksum)
    default:
      console.error('Unknown algorithm: ' + algorithm)
      return false
  }
}

console.log(checkChecksum('089GU320BK1KJA8', 'SHA-0'))
