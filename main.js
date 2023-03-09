//--------------------------------------------------------------------
const formControl = document.getElementsByClassName('formControl');
const nativeSelect = document.getElementsByClassName('nativeSelect');

formControl.addEventListener('click', removeOnchange);

function removeOnchange(){
    const value = nativeSelect.value.contains('0');
    if(value){
        formControl.removeAttribute("onChange")
    }
}
//--------------------------------------------------------------------