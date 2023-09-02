function chk_uppercase(str) {
    RegExp = /^[A-Z]/;
    if (RegExp.test(str)) {
      console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
chk_uppercase("Kku"); 
chk_uppercase("kku"); 