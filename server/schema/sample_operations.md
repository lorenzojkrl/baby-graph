query {
users{
name
age
height
hobbies{
title
}
},
hobbies{
title
},
posts{
title
}
}

# query {

# user(id: "654"){

# age,

# name,

# height,

# posts {

# title

# },

# hobbies {

# title

# }

# },

# hobby(id: 452){

# title,

# user {

# name

# }

# },

# post(id: 352){

# title,

# user {

# name

# }

# }

# }

# mutation {

# createUser(name: "Apollo", age: 12, height: 123) {

# name,

# age,

# hobbies{

# title

# }

# },

# createPost(title: "A new post", comment: "Shall I work?", userId: "651" ) {

# title,

# comment,

# user{

# name,

# posts{

# title

# }

# }

# },

# createHobby(title: "A new hobby", description: "Shall I work or shall I play?", userId: "651" ) {

# title,

# description,

# user{

# name,

# posts{

# title

# }

# }

# }

# }
