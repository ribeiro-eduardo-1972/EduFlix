import React from 'react'

function ButtonLink(props) {  
    //props => { className: "Nome da Classe", href: "/" }  
    return (
        <a className={props.className} href={props.href}>
            Novo vídeo
        </a>
    );   
}

export default ButtonLink