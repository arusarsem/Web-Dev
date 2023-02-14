function makeUser() {
    return {
      name: "Aruzhan",
      ref: this
    };
}
  
  let user = makeUser();
  
  alert( user.ref.name ); 