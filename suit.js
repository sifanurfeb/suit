let tanya  = true;
while ( tanya ){
//cari tahu player pilih apa 
let p = prompt('Pilih : batu, kertas , gunting ');

//menangkap pilihan dari komputer
let compt = Math.random();

if( compt < 0.34){
    compt = 'batu';
}
else if( compt >= 0.34 && compt < 0.67){
    compt = 'kertas';
}
else{
    compt = 'gunting';
}
// console.log(compt)
//membangkitkan bilangan random

let hasil = "";
//rules
if ( p == compt){
    hasil  = 'SERI'
}
else if ( p == 'batu'){
    if(compt == 'gunting'){
        hasil = 'Menang';
    }
    else{
        hasil = 'Kalah';
    }
    // hasil  = ( compt == 'orang') ? 'Menang' : 'Kalah';
}
else if( p == 'kertas'){
    if(compt == 'gunting'){
        hasil = 'Kalah';
    }
    else{
        hasil = 'Menang';
    }
    // hasil =(compt == 'Gajah') ? 'Kalah ':'Menang';
}
else if(p == 'batu'){
    if(compt == 'kertas'){
        hasil = 'Kalah';
    }
    else{
        hasil = 'Menang';
    }
    // hasil = (compt == 'orang')? 'Kalah' : 'Menang'
}
else if(p == 'gunting'){
    if(compt == 'kertas'){
        hasil = 'Menang'
    }
    else{
        hasil = 'Kalah'
    }
}
else if(p =='gunting'){
    if(compt == 'batu'){
        hasil = 'Kalah'
    }
    else{
        hasil='Menang'
    }
}
else{
    hasil = 'Memasukkan pilihan yang salah'
}

//tampilkan hasilnya 
alert('Kamu memililh : '+p+' dan computer memilih : '+compt+' \n Maka hasilnya adalah : Kamu ' +hasil);

tanya = confirm('Lagi ? ');
}
alert('terima Kasih sudah bermain')