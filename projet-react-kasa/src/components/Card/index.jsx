import logementList from '../../data/logement.json';

export default function Card() {

    return (
        <section className="gallery-card">
            {logementList.map((logement) => (
                <div key={ logement.id } className="card">
                    <p>
                        {logement.title}
                    </p>
                </div>
            ))}
        </section>
    )
}