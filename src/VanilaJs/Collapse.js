

function Collapse() {
    
    document.querySelector('.burgerMenu').addEventListener('click',()=>{

        document.querySelector('.header__navlinks').classList.add('expand')
        document.querySelector('.header__right').classList.add('column')
        
       
    })
}

export default Collapse
