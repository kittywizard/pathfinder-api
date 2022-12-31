import useSpellMap from '../../hooks/useSpellMap';



const SpellInfo:React.FC = (props: any) => {

    const {formatSpells} = useSpellMap();


    return (
        <li>
            {props.name != '' &&
                <><b>{formatSpells(props.objectKey)}</b>: {formatSpells(props.name)} <br/></>
            }
        </li>
    )
}

export default SpellInfo;