function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) { //이름 일치여부 확인
      return contacts[i][prop] || 'No such property'; //프로퍼티가 없는 경우 대비
    }
  }
  return 'No such contact';
}
