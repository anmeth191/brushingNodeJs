/*
This example we export a module

const helper = (data)=>{

return `${data} is logged in`;

}

module.exports = helper;
*/

/*This example we export a module pattern*/


const user = (data)=>{

    return `${data} is logged`
}



const id = (data)=>{

    return `${data} is the id`
}



const lastName = (data)=>{

    return `${data} is the lastname`
}


module.exports.user = user;
module.exports.id = id;
module.exports.lastName = lastName;

