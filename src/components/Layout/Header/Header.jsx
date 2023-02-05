import { PropTypes } from 'prop-types';

// const Header = styled.h2`
//      color: ${({colorWhite})=>(colorWhite?'red':'#999')};

// `;

export const Header = ({ title }) => {
    return (
        // быстрое добавление стилей style={{color: 'red',}
        <header className="pb-4" style={{color: 'red',}}>
            <h1>{title}</h1>

        </header>

    );
};

Header.propType = {
    title: PropTypes.string.isRequired,
};