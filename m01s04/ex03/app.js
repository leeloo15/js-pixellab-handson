// Folosind blockul switch de mai devreme, prin omiterea keywordului break ruleaza codul pentru erorile 300 si 400 atunci cand se primeste eroarea 300.
var errorCode = 300;

switch (errorCode) {
  case 100:
    console.log('100');
    break;
  case 200:
    console.log('200');
    break;
  case 300:
    console.log('300');
  case 400:
    console.log('400');
    break;
  case 500:
    console.log('500');
    break;
  default:
    console.log('etc');
}
