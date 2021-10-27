import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div( ({done}: ContainerProps)=>(
    `
    display: flex;
    background-color:  #20212C;
    padding: 10px 2px 10px 10px ;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;



    input{
        min-width: 20px;
        min-height: 20px;
        margin-right: 10px;          
    }


    .label-container{
        display: flex;
        flex-basis: 100%;
        text-decoration: ${done ? 'line-through' : 'initial'};
        text-decoration-color: #D3D3D3;    
    }

    label{
        color: #CCC;
    }

`
));




