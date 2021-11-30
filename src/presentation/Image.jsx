import './Image.css';

export default function Image({head, torso, legs}){
    return (
        <section className="imageContainer">
            <div className="head"
                style={{ backgroundImage: `url(./${head}-head.png)`, 
                height: 200,
                width: 250,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="torso"
                style={{ backgroundImage: `url(./${torso}-torso.png)`, 
                height: 200,
                width: 250,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className="legs"
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