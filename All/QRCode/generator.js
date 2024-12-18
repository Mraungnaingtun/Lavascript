import qrcode from 'qrcode';

const data = '00020101021226350011mm.com.mmqr010140211terminal002520454115802MM5911Food Corner6004Bago61054000464290002MY0110ဖူဒ်ကော်နာ0205ပဲခူး5303MMK54075000.00623801099876543210821ကုန်စည်အတွက်ပေးချေမှု63047781'; 

qrcode.toFile('./qr_code.png', data, {
  width: 300, 
  margin: 4,  
}, (err) => {
  if (err) throw err;
  console.log('QR code generated successfully!');
});