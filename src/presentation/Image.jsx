export default function Image({head, torso, legs}){
    return (
        <section>
            <div className="head"
                style={{ backgroundImage: `url(./${head}-head.png)`, 
                height: 200,
                width: 250,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="head"
                style={{ backgroundImage: `url(./${torso}-torso.png)`, 
                height: 200,
                width: 250,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="head"
                style={{ backgroundImage: `url(./${legs}-legs.png)`, 
                height: 200,
                width: 250,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
        </section>
    )
}