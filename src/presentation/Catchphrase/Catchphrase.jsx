export default function Catchphrase({ catchphraseList }){
    return (
        <>
            <h3>Catchphrases:</h3>
            {catchphraseList.map(item => {
                return <p key={item}>{item}</p>
            })}
        </>
    )
}