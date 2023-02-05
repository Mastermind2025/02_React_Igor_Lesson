//импортируем библиотеку для работы со стилями
import styled from 'styled-components';
//импортируем SVG иконку. Здесь два способа
import mySvgIcon from './icon.svg';
//иконка, как как React компонент
import { ReactComponent as MyIcon } from './icon02.svg';


//добавляем стили
const Wrapper = styled.div`
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 0 10px #000;
    margin: 30px;
    padding: 15px;
    background-color: silver;
`;

const Title = styled.h2`
    font-size: 20px;
    font-weight: 600px;
    //data это true, по этому margin: 10px
    margin: ${props => (props.data ? props.data : '0')}
    
    // приходит primary это true и цвет red
    // в другом примере primary нет, значит цвет - серый
    
    padding: ${props => (props.primary ? '20' : '0')};
    color: ${({primary})=>(primary?'red':'#999')};
    
`;

//  margin: ${props=>props.data?props.data:'0')};
//  margin: ${props=>(props.data ||'0')};

export const Product = () => {
    return    <Wrapper>
        {/* primary это prop. Если явно не указно false, то это true */}
        <Title >Not Primary. Consecterur adipisicing elit</Title>
        <Title primary data="10px">Consecterur adipisicing elit</Title>
{/* импортируем SVG иконку */}
        <img src={mySvgIcon} alt="" />
{/* импортируем иконку, как React компонент */}
        <MyIcon />
        <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda optio
        </p>
        
            </Wrapper>
}