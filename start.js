const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

// `id`, `fullName`, `initials`, `birthYear` and `departments`



const full_user_array = create_users(userDataDump)




console.log(full_user_array)
console.log(department_finder(full_user_array))



function department_finder(data) {

  let return_departments = []
  for (i = 0; i < data.length; i++) {
    for (y = 0; y < data[i].departments.length; y++)
      if (return_departments.indexOf(data[i].departments[y]) == -1)
      return_departments.push(data[i].departments[y])
  }
  return return_departments.sort()
}




function create_users(data) {
  const User_array = []

  for (let i = 0; i < data.length; i++) {

    const User = data[i].split(",");

    let initials_helper = User[1].split(" ")

    let initials = ""
    for (y = 0; y < initials_helper.length; y++) {
      initials = initials + String(initials_helper[y][0].toUpperCase())
    }

    const User_object = {
      id: String(User[0]),
      fullName: String(User[1]),
      initials: initials,
      birthyear: String(User[2]),
      departments: String(User[3]).split("|")
    }

    User_array.push(User_object)
  }

  return (User_array)
}