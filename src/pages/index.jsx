import { Link } from "react-router";


<CardsContainer>
    {location?.map((logement) => (
        <Link key={`appart-${logement.id}`} to={`/logement/${logement.id}`}>
            <Card
                title={logement.title}
                pictures={logement.pictures}
                cover={logement.cover}
                description={logement.description}
                host={logement.host.name}
                hostpic={logement.host.picture}
                rating={logement.rating}
                location={logement.location}
                equipements={logement.equipements}
                tags={logement.tags}
            />
        </Link>
    ))}
</CardsContainer>