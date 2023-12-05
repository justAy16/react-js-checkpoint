import React from 'react';
// imported tags from bootstrap library
import { Container, Row, Col, Card, Button } from 'react-bootstrap';







function Secondrow() {
    // declared objects to make the code neater
    const Yvette = {
        name: 'Yvette Fernandez',
        personality: "Beauty and finnesse, don't look in her eyes, you'll fall in love.",
        image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAGAAIDBAUHAf/EADsQAAIBAwIDBgMGBAUFAAAAAAECAwAEEQUhBhIxEyJBUWFxFJHRI0KBocHhMjNSsQcVQ3LwJIKiwvH/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQBAAX/xAAhEQACAgMAAgIDAAAAAAAAAAAAAQIRAyExEkETUTJCYf/aAAwDAQACEQMRAD8AFLs/9R7Cmg0y6fNzJ6HFeK1TIcycNivc1CDT8jFcYPzXnNTM14TWnDy9N5qYTWnpOmyXRSRYjKzNiCIf6rfoo8TWNpK2FGLk6RUlVbaDt7k8inp5msxdYt3k5YuYjxxXYdC4GslAuNZijv7w4P2iZjj9EXoPfrW7PoFosPIlrEI8fwhABS/k90PeJcs4fbXEFw/ZxSjtP6SCM1OQVIyKKeJOBbVC15pJe1uIzzcinun6UNiB1uVjlICTk8p/ocAH5Hf5VqmmBLE0MBp2aYwZGKsMMDgikDRih+a8ppPpSrjjNlJe4kPmx/vUkaZ8TUce5q3EK449WIevzp4hXyPzqRVp4WuNIexXy/Ol2KeVWOWvOU1xxEkMXMO0GEG7HyFFOiWU99ayX9hfPbToPsljPdRB0BHjn1rP4Q0c69cySyFksom5dusjdce3nRPN/h9aZBs7mSzdGZxJAoVhnGcnxG3Q0tu2Uwh4xsKOGNRurrT+fUY41lQYd06H2qxPrmmg9k97CjnoHYLn51gXtwbOy/y/Tjk/ec+JofvRw9aQ8+uRkOxKrJNGVDsOuDisTvQTgk7CjVGDo3KcgjbFc94gUQQwOvTtFP47j6VZmuYtJ5brS5XFtzfaQc3MjL4lfIisfXtQF1ocTrjmDZ+TftQqNMKTdbHGVZbh1OOYfnUnKMUPTXvY3STA93Ck+2MURqQ6Bl6EZFOXCSXSJhSp7ClXGGDEKuQiqsQq/bITiiBJ0TapljqWOLap1ioDSsIqTxYU7E+gq6IqtWNuDPzsMhBzYrG6VmpW6CHgW3i0rhy0FwyISC7FjjJJJqfiD426WS50a6VnCcoRslds+W/jXt1YG/0iJooUlUAOi4B2x4fhQzcTrYS9pY3MokTYwTjGMeAP1pa2epjhGUbvYQ8I2txdSyTXsDRSBQHVgcc3jjIG1XOJuHtP1KHlulwR4qd6r6XxKl3Zc6I8bjusrqQQazdU1dyW75Nd5VwUoeT2Yt1oVlpdg1vbys0SZIDHNAs02YOwB7veGK3dd1o8rxhsnHnQi7OORmyM5OKOKb6KyUuEdzLmKME9FAot4cm+I0xMnLR9w0GXrBXUHxNbfA92Pi5bZjkSDI9x+1MrRM+hSUNKrZjr2sMBaFa1bKPpWdbruK27FNhtRAItpH6VMsdPRKnRPShNIezq9Iq2mkSy47zDP0q5NbSaNbG5uiEmkUqkPiAfE/Ss/WCI9FiVj33BbHiSQfoaTlfofij7IOB+OLYWNtpd3L2VzbxiPv8A3+XYEH2rf1C7tLw8/c5z96uE6hHifmBxvzAiiC2+JS1ingmfvLn+KjcUNjI6HdXThBGvLyjyrF1WVUiZi3hQz/m18ow0pJrJ1jUrl7duaQgHbasULYTmkjyW8gudR+FDgFs4Y9CfAUrtELhI8kKNvbwrI0iENfRs+/U/lRJpNnJdXI5sEyPgfrTJrx4IjJy2wb1RWF2sa78qgk+Was6TKNPu4pS3eRw3KPzz5beHWuqwWVrpDpHYWSTajKN5CuSg6ZJPSptR4em1KAm/t0mfGQyjEi/7T+lGuULa9lMYYBhuDuPavKq6Y4i5tPlbM9vtvtzL4EfhSoAWYtqu4rfsE7orEsx3hRFYrsKJgFxE3rY0mJYQ99OyxRwjKu3n6Dx+tV7O3gWFry+kEVshxv1kPko8TUihtXmE94Ow0+M/Y2ud39W8qXKXpDscL2z2G3l1bm1K7yLde7AjHPN61ka9mdQoP8uPPtn/AOUS3upRPG8agR8qZx4ACh2cGSBmdSHcYIPhSZ60UROcajZ/aqSMelaWhkvp4TIyOgNafE1gIeRlG5XpQ9p8jpAjgEjGDg4xTVuIPGanwZlfcChjiUgXHw6YwnXFFnxHw1lJN5KTQjb2z3lyhfPaSNucUUO2Zk2qK2lyrFewhscoO+fKur8A6KtzYXOpyPyRQA8jEdceNAcPDLzX0cSIHZunLsF9SfKu7RWcOlcGxQQoERygwPLIpjSbsUm1om0XRI0L3Eq5kl7xyN8eH5VuGGKOPBjyPRc1TtbwM6qp25FJ9yM1dZQ433rVoySs47x3Y/A8UC+tW+zlQMABgqwPeB9DkfOlR1xXoMWoWh5U5ZozzRuN8Hrj2NKgnjbdoxNVs5VYrlhgUTWlvIFwsRaTyxsPc/SszhGzurmb4r4KV0G0WV5V/wB2T1/Cj2CzcACRQoG+B0pOTI7qI3HhX5SMJNJvbjElwy7bICc8v4dBXsmmdm3NI5Y/1eNEFyBEPHp1FC+tarFCOQlpHY4VOpJ8seNJSdlNqis86xXMUQyyM+CS2dj+9WryVDMoHh1+Y+tVbWyeBfj9VwZiDyQ9RDtt/wBx/LwqvDKHuHdyCRgY8z1x/aimqAjJSujziVkYWuR/C7E+2CPrWfpeiI/PHnK4GfSvdXc3E/ZqOgC/LP71p6RMYkBI+7g+tGno2ijqGhyPpkqqRjlI96l4C4fWe8LkAmGJuvmdvnua28tMDyEAMKs8DILbVb6FsgMgK+2TRw7QM1UbNi10KO3khkSIc4kBAz45q7xw4tOHeyT/AEuQe+CK2lixNbsAMZOcexoZ4+btdKuIwevjVTVIkTuRQ4b1VZLOKWVy0jjmKAZIz0B8tjRCusSKMxQxj1bcmgDhK7E9q4OOZJXBA98j8iKKoz3ceFRzySXCpQi+ly6125CkdnEQfIYpVnTpkUqX8+T7D+GH0bMCJyd0AAeVR3cohU5xTUnWKEHmznehTifXhChihy0rnlVR1JPSjUQf6e6/rXZKsUWXmkPKiL1Y+VN0bSPh3+LvSJLxh7iL0H1qLQ9La3Ju70iS9kG5zkRj+kfqa2+i1RCFbJMuXy0uGLxPedlBFboO/JufRR9SawbFWkZMd7JJz6ef6VLxNcCS/uNweQCJfnj+/N8qv6IYVtkZsBp2CL6Zy3/PekZFch+LUTMjtHN9L2oGzbEVpgLEFyNgeoq5cRqlwTgDmXP49DVS4PLvWc0OvRZ04Ds8Z6US6Pp7G3+Mh/mpIRg/eGBkf88hQrYygmuicJYOk5I++2aZiVyFZXURzamCvZmJy6oxKgb/AI0F8V3Uk1hNzAqME4zR/qNtALWVmVSPWuY8XyrDBKM4GDt0qmSJoNAjwdqJg16S2Y9y4Hd/3Df+2a6hbd5FPpXCRPJbXMdzF/MjcOvuK7PoF4l7ZxTxNlHUMvsalzR9lOJ+jSKZzSqcYAzSqbxHpgzquuJBCw5ug23rP0e0aSQ6heDM7fy0I/lqf1NKlVuNJsjzTaVG/F0qY9B7ilSppKc/1Ilr65kO4WVm/wDIn/2pS3ZFvYxxPysmWXHgdsUqVT/sVxejfW5N7p/xo2eIgSrjpkDP571nXN+inBI39aVKsktjYvRJbXCpMu+zHaui8JXaCyljLDKvkexH7UqVFj1NAZNwLOs6pFFFys4x+dch4t1X4+4dIjlBtkUqVPmxMUCM0fNJjyFGH+GepMks2nSt/D9pFn+kncfP+9KlS5q4hwdSOizTBIzk4HUUqVKpSlM//9k="
    }
    
    const Miranda = {
        name: 'Miranda Charllote',
        personality: "Danger and adventure, be careful with this one, you just find yourself begging.",
        image: "data:image/jpeg;base64,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"
    }
    return (
    // wrapped it in a container to make it more compact
        <Container style={{margin: '2rem auto'}}>
            <Row > 
                <Col>
                    {/* second card */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Yvette.image} />
                        <Card.Body>
                            <Card.Title>{Yvette.name}</Card.Title>
                            <Card.Text style={{height:'5rem'}}>{Yvette.personality}</Card.Text>
                            <Button variant="primary">Pick</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    {/* third card */}
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Miranda.image} />
                        <Card.Body>
                            <Card.Title>{Miranda.name}</Card.Title>
                            <Card.Text style={{height:'5rem'}}>{Miranda.personality}</Card.Text>
                            <Button variant="primary">Pick</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Secondrow