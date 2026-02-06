function userInfo() {
  let userName: string = "trang_test"
  let age: number = 26;
  let isActive: boolean = true;
  let roles: string[] = ['admin', 'user'];
  let user: {
    name: string,
    email: string,
    isAdmin: boolean,
  } = 
  {
    name: 'trang test',
    email: 'trang_test@gmail.com',
    isAdmin: true,
  }
  console.log(
    `User: ${user.name} (email: ${user.email}), Roles: ${roles[1]}, Active: ${isActive}`
  )
}

function checkAge(age: number): string {
    if(age >= 18) {
      return 'Adult';
    }
    return 'Under 18';
};

function main() {
  userInfo();
  const ageStatus = checkAge(20);
  console.log('Age status:', ageStatus);
}

main();
