import Image from 'next/image'
import { IdiomaSubmenuType } from '../../types'
import { Idioma_list__wrapper } from './idiomas.styles'

export const IdiomaSubMenu = function ({ data, func, selected }: IdiomaSubmenuType) {

    return (
        <Idioma_list__wrapper>
            {data.map((dt, index) =>
                <li
                    value={index + 1}
                    key={index}
                    onClick={() => func(dt)}
                    className={selected === dt.idioma ? 'selectedItem' : ''}
                >
                    <Image
                        alt={dt.imgAlt}
                        width={16}
                        height={16}
                        src={'/image/navbar-assets/flags/' + dt.imgPath + '.png'}
                    />

                    <p>{dt.idioma}</p>

                    <i className={selected === dt.idioma
                        ? "material-symbols-outlined check"
                        : 'hideCheck'
                    }> done </i>

                </li >
            )}
        </Idioma_list__wrapper>
    )
}