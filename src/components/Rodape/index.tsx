import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 1em auto;
`

const ItemEstilizada = styled.li`
    list-style-type:none;
`

const ImgEstilizada = styled.img`
    padding: 5px;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizada>
                    <a href='#'>
                        <ImgEstilizada src={facebook} alt="logo do facebook"/>
                        <ImgEstilizada src={google} alt="logo do google"/>
                        <ImgEstilizada src={instagram} alt="logo do instagram"/>
                        <ImgEstilizada src={whatsapp} alt="logo do whatsapp"/>
                    </a>
                </ItemEstilizada>
            </ListaEstilizada>

            <p>2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}

export default Rodape