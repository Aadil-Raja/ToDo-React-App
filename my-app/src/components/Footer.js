import React from 'react'

export const  Footer= () => {
  let footerStyle={
    position:"relative",
    top:"100vh",
    width:"100%" ,
    
  }
  return (
    <footer className="bg-dark text-light py-3 my-3" style={footerStyle}>
      <p className="text-center">
      Copyright &copy; MyTodos.com</p></footer>
      
     
  )
}
