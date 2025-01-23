import qrcode from 'qrcode';

const data = 'Data You Want to Encode in QR Code'; 

qrcode.toFile('./qr_code.png', data, {
  width: 300, 
  margin: 4,  
}, (err) => {
  if (err) throw err;
  console.log('QR code generated successfully!');
});