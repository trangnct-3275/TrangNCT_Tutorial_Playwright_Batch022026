interface IUser{
    name: string;
    email: string;
    isAdmin: boolean;
}

class User implements IUser {
    constructor(public name: string, public email: string, public isAdmin: boolean) {
        this.name = name;
        this.email = email;
        this.isAdmin = isAdmin;
    }

    getInfor(): string {
        return `User: ${this.name} - Email: ${this.email} - isAdmin: ${this.isAdmin}`;
    }
}

function showUserInfo() {
    const user1 = new User("Trang", "trangtest@gmail.com", true);
    console.log("User 1 Info: " + user1.getInfor());
    const user2 = new User("Tracy", "tracy_lee@gmail.com", false);
    console.log("User 2 Info: " + user2.getInfor());
}

class AdminUser extends User {
    constructor(name: string, email:string){
        super(name, email, true);
    }

    deleteUser(user: User): void {
        console.log(`Admin ${this.name} deleted user ${user.name}`)
    }

}

function actionDelete() {
    const users: User[] = [
        new User("user 01", "01@gmail.com", false),
        new User("user 02", "02@gmail.com", false),
        new AdminUser("Admin", "admin@gmail.com")
    ];

    users.forEach((user) => {
        console.log(user.getInfor());

        if(user instanceof AdminUser) {
           user.deleteUser(users[0]);
        }
    });
}

showUserInfo();
actionDelete();