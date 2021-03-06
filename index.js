const QRCodeDecoder = require('./class/QRCodeDecoder');

// Test QR Code data
const qrCodeData = "HC1:NCFOXN%TSMAHN-HZL497V56V7L6.SN/A2I:ID+4HW05B9ZT3S.JXG40CE/E9 NI4EFSYS1-ST*QGTAAY7.Y7B-S-*O5W41FD:85 KL/Y41FDIV4RB4VIOLF9$HF..H*JJ9NT/Y4%.HE3KZD5CC9G%8L$0CNNG.8W%89FH4%H-RI PQVW5/O16%HAT1Z%PSH99H6-F0+V9.T9D 9BTU.XMCTUDV2KG9$I93*8FU2P4JY73JC3DG3IFT-F3/4386B893Y73UR84%I7ZC/FJ:439J3323M*4.T4:C7Y6TKR2QH5KYK$YM99TMX3.XIMXBOOJ$IBQMI4HBNF6DD7OBL6L6IL6R72N6KF84:H3J1D1I3-*TW CXBDH$23ZCJBCU.CID3 PTAVCULLIH2M6AL1B5VDY14M:JOLS0I7I6PA1V QF49SR 04FIP*TB.3--5*0D6K817L2SHK7M%BP6RFTF3MO979OGKAM 5X4BM/PRIKYBDD%UEBBQR3%SE";

try {
  const decoded = new QRCodeDecoder(qrCodeData);
  console.log(decoded)
} catch (err) {
  console.error(`An error has occured: ${err.toString()}`);
}