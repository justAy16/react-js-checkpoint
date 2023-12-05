import React from 'react';
// imported tags from bootstrap library
import { Row, Card, Button } from 'react-bootstrap';

function Firstrow() {
    // made use of object to make the code neater
    const featured = {
        name: 'Featured',
        banner: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8PDxAQDw8PDw0PDw4PDw8PDRAPFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQFzUdHR8tKy0tLS0tLTAtLSstLS0tLS0tLSstLS0tLS0tLSsrLS0rKy0tLS0tLS0tLSstLS0tLf/AABEIAHABwgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAACAQMEAAUHBv/EADEQAQEAAgECBAQFAwQDAAAAAAEAAhEDITEEEkFxUWGRoSIygbHBBdHwFEJS4RMzcv/EABkBAQEBAQEBAAAAAAAAAAAAAAIBAwAEBf/EACARAQEAAgICAwEBAAAAAAAAAAABAhEDIRIxE0FRMgT/2gAMAwEAAhEDEQA/APjWJKOE0t481STIE8SUCkTIEiUCmTgTnApEiJIlApkiJInApEyBMlApEyBMkFImQJEoFMmQJE4FMkQJkoFMkQJEwpkhgMisCmU7gNO5bHRLQ0boW7btIYtLFiUQxaWLGnBYsmDGnBYsmLCnBYMmLGnBYM2DE4LFkwYU4LFkwY1pBYsmLGnBYMmLCnBYM2DGnBYM2DCnBYsmLE4N111CW8RWJDhK4LTGdMsr2qJkU00lzqZIgTJQKswf5/akiSnGdImQJEoNMmVZMlApkiBIlAqwkQJE4FMmVZMlApkiBIlApkxqyRKBVgyKsZDKUKYyGr3LchsPd247u3XaaLd247o3dt2k7oWhaFoUjli3LFY0pHMW5ixKIYtLFjTiGDJiwpwWLSxY04LFpYsacQwZMWNOCwZMWFOCxZMGNOCxZMGNOCxZMWFOCwZMWNOIuouoTTwnSvxsWGSdrRxc/wAfqWmOUZZ40+bHs/pVltxwMxDr0+9k8ssozxy+nEigpLotPGZVkxlApyISJBTJECRKBVhIgSJjTJECRKBTJlWSJQKsJECkZQKsJDVjKUGwxkQGmQ2HuW6vdO67HR7p3Dd27tpo90bju7d23aTujdG6Fu2unLRdQxKRCxWli0pRDFpYsKciGDJgxpRDFpWLGnEMWljE4LFkwY04hgyYsacFi0sWFOCxaWLGnBYsmLGnBYMmLGnEXUXRIiZVkysGtHDmjsde16TzYOJl5cTL16evxvIGtORtsM9MM+PyXcnJV7juku3t2tGSI6pKjVpSMRkTgU90kBmNYNMkQGfm+3yJwKQyGAyGUCmSGK/PdOMhpjIqxkVgWGMhgS39ZDTGkavchrsdHumG6dy2mi3TuG7t3bTRuT9KNx3du7btFRujd1y6Tc3EzC5NqWLW5Y1WUacFY5NyxWFOIWLTFjTiGK0rFjTiGjW7m4KEKagzyxgkaUBiyYMK0gtDcxY04hitLGFOCxazEHu6qmNOIYMmDGnEXXXRIiRETXzpJQaZMqyZKBTJECRKDVmMt1ZIlAq0KS7HlQT0bscV7C+xNnSkUB8Z8Z67Omunq9fh6yg1xIoxB9dP2r3gA25mvTRtfaUmwtkDHrIGnj43LoHTfd6Xpf07wnGZDybyPUO1phhcmPJyTCbrBw8WWTrEX2vS4v6TkiuQZa/Cem/m2zkzwxemscfTsVb/AFPjx7by9jp9W9OPHhj/AFXjy5uTP+I8nPjcVxyETuetZx44PdT9P+63xnjf/Lr8Aa9drlqHGbstTfXbfeXj31Wnj4cTbjrkEQ9Mj9LHkdbThwnps9p5eGz+WXv0yncbZ6ZzKS91i3Tutz406ZDj17p/NXnxp19PidoarTcqS7cKd3O0Y3bpw4ckUOh3fQi9KondG7nL7WjwPHx5vlzcsV/Kmk38HdZ3dJldTdZ90jehyeG4cf8All7v9rLycmB2xP3/AHlcNe6EzmXqDx27w/D5uhYsc1tBzeXp6+ssLIHJLfQ+K4/K6ej8Ho2LO35eOQ8rrPHf5czZr5Pc/SqceHk/KvHl8F3j+ixy79Fhbj/UYFgtr5fB549tPt3+lk5ME7ie4ljlLPb042X1RWK0tHldb06NC+m4NINFy0biTp8WWndXPAujqWYruqzxvS8L4Vy+B71HjOEw6Lt+XYnlhdbDHknl4vOyq2szq8m89erEGMmLCtI7kw1r5m6pnlBjSxFjSwYVpHZQaWLGnHUXXUVJIgVrhqsSuJ4wnhlpJQKUhidZD+soNPE+lZx5gj318Tp9Kne56lKFj9Zh4/geLHPDi4sMk/H5cMTWR31eP4zxrk97BhyJsOz1r/C4Yr1yD3b1Xmuck9PFj/nx47b7V5UjHPuyMrJusxwfauw8mPfr97M5770kpdBcdtv+r+B9Yvis3117dLNqkZ+dD48fxccj69ffrWYZnr0+9nkN0qXFu48B7O6/DhTreZi2zg8Xnj8/f+9rjlPthnhl9PS4uO18fHU+D8bxv5hxfj+bH7XrcfFjkebDIyPXSKe968NPmc2VxvcZ8MIcng+LSoYfFHymvmdqrxf9Rww6Yfjy+X5T3f7Xlc3JycrvN6Hp2xP0llyYzrW14+LO978Yt8ZxcBj5uPLJ3k49tY9Drr63n7tHjczy4YnY838WXHLXW8md7fQ4pfHu7aceZMfKOh6p6bO1r8N/T8H/ANnJiP8Aw3r7v8WDhxcunp/Pxvb8TwfgwU74Gn26P3G04pvuzbHmy8dSXW0Zf041+HWvl1s3J4FKp4k64qfPFSj/AFfNj/vX/wCtZfvO5Y/eIY45/WW1PivMZafXtRxcO2nxXjHM1ljjs6jjsbL/AJ8Wwys3+vTjjfHvp7GPAYYueXYPq+hea57VfXb36VbyOtC6e5119Ktyuyz36dhxWb3drVgntV7pORP0+tna1kW4c+WPQdnw7h7Vp4ky6P0bJ5F0Y9V7B3YZZPZ9LvOx148a0cnFj6dKnyvbfT59I48qUuY0tlKSxXlRTkxOTUGkWY4Wnh46jj8Rj6ifct/E4+XzCJvR17vtaYSVjyWw8ubyHzvJ8Rybd/Gv8TnYOTKPLn9Fw8cnbnKPkH5R3IbB6taV54JHVqwacuPB9QfqXeLvP9YsiryvQfCdB8xp+G2zcnGH/cMsLDxzlZGLW51K2VbwWLJgwrSOuouoSSsMulUSGsqWGVmBt12qieLKBVvl+dw1e5EthpY5b+3bpSMCRIbDGtwe3pUk8ZShYYy3VjIajYZIasZDKDYtpqxkMthYs/X95Y/51Cq3IZSjYureOzDWYZTlZ5R63hfL67+1b4jy/wC1f51eZx82p5c9vM5rTy3ivltbjyGL1BPfrWeL8Rj5cTD165fE+Vhz5Pb71fnh8l9NPilsq7ky2HyY4wMz/O1Hmhtp4tWPifL+U6/F/tLLx3N03mujso467616WLd25edH48fxv4vHI9Q+Ydn+1f4vmwMccsUXMenrj19S8nd26/LdaG8OO5Vnm/z5x3HdG7PbXS3DI6732e3x9KtY7uu2uk7o3RuhaLpY9Oz6D033+H+fCHfr96N66wWmykPLFP3q1u3RlHZSJ81Gevjv23GLTZSJ3QtCxY7KQ/N8/vByisWmykWmePrj9FmZ4Py9yyrQtPLS+G2zyj2RocbFuRzZHr9et3nE+O/rZhyJ09H96nlan/UvqH7Q5ubfypc5oseO7DkzqWlY2Nr0SIYtLFgcRddu6hP/2Q==",
        title: 'Special treatment',
        body: 'Let your money speak for you, speak VIP.'

    }
    return (
        <Row >
            {/* first card */}
            <Card className="text-center">
                {/* made use of card header */}
                <Card.Header style={{paddingTop: '2rem'}}>{featured.name}</Card.Header>
                <Card.Img variant="top" src={featured.banner} />
                <Card.Body>
                    <Card.Title>{featured.title}</Card.Title>
                    <Card.Text>{featured.body}</Card.Text>
                    <Button variant="primary">Let's Go</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Our models</Card.Footer>
            </Card>
        </Row>
    )
}

export default Firstrow