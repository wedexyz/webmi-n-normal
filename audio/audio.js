function play(audioId) {
    $('#audio-' + audioId)[0].play();
    }
function pause(audioId) {
        $('#audio-' + audioId)[0].pause();
      
        }
//notifikasi objek detectioon
function activate() {
  play('activated');
      }




//notifikasi testimoni
function persiapan() {
        play('persiapan');
            }

//notifikasi pemilihan nama
function widhi()
{
    play('widhi');
}


    //notifikasi baik
function ta() {
    play('ta');
        }  
//notifikasi buruk
function tb() {
    play('tb');
        }
function fire() {
    play('fire');
                }       


//menghentikan suara testimoni

function pw(){
  //  pause('persiapan');
    pause('widhi');
}

function pp(){
    pause('persiapan');
}

//pemangilan eka

function eka(){

    play('eka');
}
//fucntion pause eka
function ekap(){
    pause('eka');
}