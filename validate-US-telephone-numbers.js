function telephoneCheck(str) {
  
  //use https://regex101.com/ to test
  
  if (str.match(/^(([1]{1})?)(\s?|-?)([(][0-9]{3}[)]|[0-9]{3})(\s?|-)[0-9]{3}(-|\s?)[0-9]{4}$/)) {
    return true;
  }
  
  return false;
  
}


telephoneCheck("(555)555-5555");