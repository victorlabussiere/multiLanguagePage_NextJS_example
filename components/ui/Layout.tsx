import PropTypes from 'prop-types'
import Navbar from './Navbar/Navbar'
import GlobalStyle from '../../styles/globals'
import { idiomaDataType } from './types'

interface LayoutProps {
    children: React.ReactNode
}

const ArrIdiomas: idiomaDataType[] = [
    { idioma: 'PT', imgAlt: 'BRASIL', imgPath: 'brFlag' },
    { idioma: 'EN', imgAlt: 'EUA', imgPath: 'usaFlag' },
    { idioma: 'ES', imgAlt: 'SPAIN', imgPath: 'spainFlag' }
]

const Layout: React.FC<LayoutProps> = function ({ children }) {
    return (
        <>
            <GlobalStyle />
            <Navbar idiomaData={ArrIdiomas} />
            {children}

        </>
    )
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout