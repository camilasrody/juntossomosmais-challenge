
        usersOutside = users.filter(user => {
          return usersInside.filter(insideUser => {
            console.log(insideUser)
            console.log(`${insideUser.email} == ${user.email} ` + (insideUser.email == user.email ? 'sim' : 'nao'))
            return insideUser.email == user.email
          })
        })
