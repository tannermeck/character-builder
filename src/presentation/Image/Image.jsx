import './Image.css';

export default function Image({head, torso, legs}){
    return (
        <section className="imageContainer">
            <div className="head"
                style={{ backgroundImage: `url(./${head}-head.png)`, 
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="torso"
                style={{ backgroundImage: `url(./${torso}-torso.png)`, 
                height: 100,
                width: 150,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            </div>
            <div className="legs"
                style={{ backgroundImage: `url(./${legs}-legs.png)`, 
                height: 100,
                width: 150,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
            </div>
        </section>
    )
}