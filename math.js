const tongmang = async (data) => data.reduce((a, b) => a + b, 0),
tongso = async (...data) => data.reduce((a, b) => a + b ,0),
trumang =async (data) => data.reduce((a, b) => a - b,0),
hieuso = async (...data) => data.reduce((a, b) => a - b,0),
tichmang = async (data) => data.reduce((a, b) => a * b),
tichso = async (...data) => data.reduce((a, b) => a * b),
thuongso = async (data) => data.reduce((a, b) => a / b),
thuongmang = async (...data) => data.reduce((a, b) => a / b);
module.exports = {
    TongM:tongmang,
    Tong:tongso,
    HieuM:trumang,
    Hieu:hieuso,
    TichM:tichmang,
    Tich:tichso,
    Thuong:thuongso,
    ThuongM:thuongmang
};