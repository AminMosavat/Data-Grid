
import { data } from 'autoprefixer';
import './style.css'



// const inputsID = document.getElementById('inputsID')
// const error = document.createElement('p')
// error.innerHTML = 'Informations Are Not Enough!'
// error.className = 'text-2xl font-semibold'
// error.style.color = 'red'
// error.style.display = 'none'
// inputsID.append(error)

const rows = [
  // {
  //   id: 1,
  //   name: firstNameValue,
  //   age: 25,
  //   lastName:lastNameValue,
  //   dateCreated: dateCreatedValue,
  //   lastLogin: lastLoginValue,
  // },
  // {
  //   id: 2,
  //   name: 'Maedeh',
  //   lastName:'mosavat',
  //   age: 36,
  //   dateCreated:'8/5/1999',
  //   lastLogin: '7/2/2022',
  // },
  // {
  //   id: 3,
  //   name: 'Sara',
  //   lastName:'mosavat',
  //   age: 19,
  //   dateCreated:'8/5/1999',
  //   lastLogin: '7/2/2022',
  // },
  // {
  //   id: 4,
  //   name: 'leila',
  //   lastName:'mosavat',
  //   age: 28,
  //   dateCreated:'8/5/1999',
  //   lastLogin: '7/2/2022',
  // },
  // {
  //   id: 5,
  //   name: 'Navid',
  //   lastName:'mosavat',
  //   age: 23,
  //   dateCreated: '8/5/1999',
  //   lastLogin: '7/2/2022',
  // },
];



// submitBtn[0].addEventListener('click' , e => {
//   e.preventDefault();


//   const firstNameValue = firstNameTag.value
//   const lastNameValue = lastNameTag.value
//   const dateCreatedValue = dateCreatedTag.value
//   const lastLoginValue = lastLoginTag.value

//   if(firstNameValue != '' && lastLoginValue != '' && dateCreatedValue != '' && lastLoginValue != ''){
    
//     const newObjectPersonal = {
//       name:firstNameValue,
//       lastName:lastNameValue,
//       dateCreated:dateCreatedValue,
//       lastLogin:lastLoginValue,
//     }
    
//     rows.push(newObjectPersonal)
    

//     error.style.display = 'none'
//   }else{
//     error.style.display = 'inline-block'
//   }


// })


const nameUl = document.getElementById('nameUL')
const lastNameUL = document.getElementById('lastNameUL')

function createdNextRow(tabIndex){

 

const oneItemName = document.createElement('input')
const oneItemLastName = document.createElement('input')

oneItemName.id = tabIndex

oneItemLastName.id = tabIndex + 1






function nextToRow(index){
   
   const rows = []


   
  
  
  // document.addEventListener('keypress',(e) => {
  //   if(e.keyCode == 13){
  //     e.preventDefault()  
      
  //     if(itemsArray[index] != undefined){
  //       itemsArray[index].focus()
        
        
  //     }
  //     index += 1
  //     if(index == 2 && oneItemLastName.id == 2){
      
      
  //     createdNextRow(3)
      
  //   }else if(index == 2 && oneItemLastName.id == 4){
      
  //   const getDataNameOne = document.getElementById(1)
  //   const getDataLastNameTwo = document.getElementById(2)
  //     const getDataNameThree = document.getElementById(3)
  //     const getDataLastNameFour = document.getElementById(4)
  //     const dataObjectRowOne = {
  //       row:1,
  //       name:getDataNameOne.value,
  //       lastName:getDataLastNameTwo.value,
  //     }
  //     rows.push(dataObjectRowOne)
  //     const dataObjectTwo = {
  //       row:2,
  //       name:getDataNameThree.value,
  //       lastName:getDataLastNameFour.value,
  //     }
  //     rows.push(dataObjectTwo)
  //     createdNextRow(5)
  //     console.log(rows)
  //   }else if(index == 2 && oneItemLastName.id == 6){
      
  //     createdNextRow(7)
  //   }else if(index == 2 && oneItemLastName.id == 8){
  //     const getDataNameFive = document.getElementById(5)
  //     const getDataLastNameSix = document.getElementById(6)
  //     const getDataNameSeven = document.getElementById(7)
  //     const getDataLastNameEight = document.getElementById(8)
      
  //     const dataObjectThree = {
  //       row:3,
  //       name:getDataNameFive.value,
  //       lastName:getDataLastNameSix.value,
  //     }
  //     rows.push(dataObjectThree)
  //     const dataObjectFour = {
  //       row:4,
  //       name:getDataNameSeven.value,
  //       lastName:getDataLastNameEight.value,
  //     }
  //     rows.push(dataObjectFour)
  //     console.log(rows)
  //     createdNextRow(9)
  //   }else if(index == 2 && oneItemLastName.id == 10){
  //     const getDataName = document.getElementById(9)
  //     const getDataLastName = document.getElementById(10)
      
  //     const dataObjectFive = {
  //       row:5,
  //       name:getDataName.value,
  //       lastName:getDataLastName.value,
  //     }
  //     rows.push(dataObjectFive)
  //     console.log(rows)
      
  //   }
  //   }
  

    

  // })
  let count = 0

  
  
 

  document.addEventListener('keypress',(e) => {
   
    if(e.keyCode == 13){
      e.preventDefault()  
      
      const UpdateAndSetLocal = (dataObject) => {

        const getDataLastInLocal = localStorage.getItem('DataGrid')
        const parseDataGrid = JSON.parse(getDataLastInLocal)
        if(parseDataGrid && parseDataGrid.length > 0){
          const copyParseDataGrid = [...parseDataGrid,dataObject]
          const stringify = JSON.stringify(copyParseDataGrid)
          localStorage.setItem('DataGrid' , stringify)
  
        }else if(!parseDataGrid){
          const stringify = JSON.stringify(rows)
          localStorage.setItem('DataGrid' , stringify)
        }
      }

      

     
      getDataLastInLocal()
      const itemsArray = [oneItemName,oneItemLastName]
      if(itemsArray[index] != undefined){
        
        itemsArray[index].focus()
        console.log(itemsArray[index])
        console.log(index)
        count += 1
        console.log(count)

      }else if(count = 2){

        console.log('hello')
        count += 1
        console.log('count:',count)
          if(index == 2 && oneItemLastName.id == 2 && count == 3){
            
            
      console.log('getDataLastName',getDataLastNameTwo.value)
      if(getDataLastInLocal() == null){
      const dataObject = {
        row:1,
        name:getDataNameOne.value,
        lastName:getDataLastNameTwo.value,
      }
      rows.push(dataObject)
      UpdateAndSetLocal(dataObject)
      }
      
      console.log(rows)
      createdNextRow(3)

    }else if(index == 2 && oneItemLastName.id == 4){
      
      const getDataNameThree = document.getElementById(3)
      const getDataLastNameFour = document.getElementById(4)
      const dataObject = {
        row:2,
        name:getDataNameThree.value,
        lastName:getDataLastNameFour.value,
      }
      rows.push(dataObject)
      UpdateAndSetLocal(dataObject)
      createdNextRow(5)
      console.log(rows)
    }else if(index == 2 && oneItemLastName.id == 6){
      const getDataName = document.getElementById(5)
      const getDataLastName = document.getElementById(6)
      
      const dataObject = {
        row:3,
        name:getDataName.value,
        lastName:getDataLastName.value,
      }
      rows.push(dataObject)
      UpdateAndSetLocal(dataObject)
      createdNextRow(7)
      console.log(rows)
    }else if(index == 2 && oneItemLastName.id == 8){
      const getDataName = document.getElementById(7)
      const getDataLastName = document.getElementById(8)
      
      const dataObject = {
        row:4,
        name:getDataName.value,
        lastName:getDataLastName.value,
      }
      rows.push(dataObject)
      UpdateAndSetLocal(dataObject)
      console.log(rows)
      createdNextRow(9)
    }else if(index == 2 && oneItemLastName.id == 10){
      const getDataName = document.getElementById(9)
      const getDataLastName = document.getElementById(10)
      
      const dataObject = {
        row:5,
        name:getDataName.value,
        lastName:getDataLastName.value,
      }
      rows.push(dataObject)
      UpdateAndSetLocal(dataObject)
      console.log(rows)

     
      
    }
      }
    
      index++
      
    
    }

   
  })
 
  
}

nextToRow(0)


nameUl.append(oneItemName)
lastNameUL.append(oneItemLastName)
// nameUl.append(oneItemName)
// lastNameUL.append(oneItemLastName)
// dateCreatedUL.append(oneItemDateCreated)
// lastLoginUL.append(oneItemLastLogin)

}


createdNextRow(1)

const getDataLastInLocal = () => {
  const getDataLastInLocal = localStorage.getItem('DataGrid')
  const parseDataGrid = JSON.parse(getDataLastInLocal)
  return parseDataGrid
}


const getDataNameOne = document.getElementById(1)
const getDataLastNameTwo = document.getElementById(2)

const getDataNameThree = document.getElementById(3)
const getDataLastNameFour = document.getElementById(4)

const getDataNameFive = document.getElementById(5)
const getDataLastNameSix = document.getElementById(6)

const getDataNameSeven = document.getElementById(7)
const getDataLastNameEight = document.getElementById(8)

const getDataNameNine = document.getElementById(9)
const getDataLastNameTen = document.getElementById(10)
if(getDataLastInLocal() != null){
  getDataNameOne.value = getDataLastInLocal()[0].name
  getDataLastNameTwo.value = getDataLastInLocal()[0].lastName
 
  if(getDataLastInLocal()[1]){
    createdNextRow(3)
    
    const getDataNameThree = document.getElementById(3)
    const getDataLastNameFour = document.getElementById(4)
    console.log( getDataLastInLocal()[1])
    getDataNameThree.value = getDataLastInLocal()[1].name
    getDataLastNameFour.value = getDataLastInLocal()[1].lastName

    if(getDataLastInLocal()[2]){
      createdNextRow(5)
      
      const getDataNameFive = document.getElementById(5)
      const getDataLastNameSix = document.getElementById(6)
      console.log( getDataLastInLocal()[2])
      getDataNameFive.value = getDataLastInLocal()[2].name
      getDataLastNameSix.value = getDataLastInLocal()[2].lastName
      
    }

    if(getDataLastInLocal()[3]){
      createdNextRow(7)
      
      const getDataNameSeven = document.getElementById(7)
      const getDataLastNameEight = document.getElementById(8)
      console.log( getDataLastInLocal()[3])
      getDataNameSeven.value = getDataLastInLocal()[3].name
      getDataLastNameEight.value = getDataLastInLocal()[3].lastName
      
      if(getDataLastInLocal()[4]){
        createdNextRow(9)
        
        const getDataNameNine = document.getElementById(9)
        const getDataLastNameTen = document.getElementById(10)
        console.log( getDataLastInLocal()[4])
        getDataNameNine.value = getDataLastInLocal()[4].name
        getDataLastNameTen.value = getDataLastInLocal()[4].lastName
        
      }
    }

  }
}

const arrayInputs = [getDataNameOne,getDataLastNameTwo,getDataNameThree,getDataLastNameFour,getDataNameFive,getDataLastNameSix,getDataNameSeven,getDataLastNameEight,getDataNameNine,getDataLastNameTen]

if(getDataLastInLocal() && getDataLastInLocal().length == 5){

  

  document.addEventListener('click' , (e,index) => {
    e.preventDefault()
    console.log(e.target.id)
    console.log(e)

    function recInputsValue (index){
      if(e.target == nameUl.children[index]){
        return nameUl.children[index].value
      }else if(e.target == lastNameUL.children[index]){
        return lastNameUL.children[index].value
      }
    }

    function recInputs (index){
      if(e.target == nameUl.children[index]){
        return nameUl.children[index]
      }else if(e.target == lastNameUL.children[index]){
        return lastNameUL.children[index]
      }
    }

    
    console.log(e.target, e.target.id)



    if(e.target.id != ''){
      index = e.target.id
      console.log('id:',index)
      const clickDataArray = []
    
       
      const clickDataObject = {
        id:index,
        target:e.target, 
        value: recInputsValue()
      }
     
      clickDataArray.push(clickDataObject)
      console.log(clickDataArray)
      document.addEventListener('keypress' , e => {
        if(e.keyCode == 13){
          console.log(getDataLastNameTwo)
        const get = getDataLastInLocal()
        if(e.target.id % 2 == 0){
          get[e.target.id - 1].lastName = recInputsValue(0)
        }else if(e.target.id % 2 != 0){
          get[e.target.id - 1].name = recInputsValue(0)
        }
        console.log(get[e.target.id - 1].name)
        console.log(get[e.target.id - 1].lastName)
        console.log(get)
        const stringify = JSON.stringify(get)
        localStorage.setItem('DataGrid' , stringify)
        console.log(getDataLastInLocal())
        
        }
      }) 
  
      }

      
  })
}


// document.addEventListener('click' , (e,index) => {
//   e.preventDefault()
//   console.log(e)
//   if(e.target == nameUl.children[0]||lastNameUL.children[0] && e.target.id != ''){
//   index = e.target.id
//   console.log('id:',index)
//   const clickDataArray = []
//   function recInputs (){
//     if(e.target == nameUl.children[0]){
//       return nameUl.children[0].value
//     }else if(e.target == lastNameUL.children[0]){
//       return lastNameUL.children[0].value
//     }
//   }
//   const clickDataObject = {
//     id:index,
//     target:e.target, 
//     value: recInputs()
//   }
 
//   clickDataArray.push(clickDataObject)
//   console.log(clickDataArray)
//   }
// })


// createdNextRow(0,1) 

// createdNextRow(5,21)

