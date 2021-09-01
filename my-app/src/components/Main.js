import React from 'react';
import HornedBeasts from './HornedBeast';
import data from './data.json';
class Main extends React.Component {
    render() {

        let mapArr = data.map(horn => {
            return (
                <HornedBeasts

                    title={horn.title}
                    description={horn.description}
                    image_url={horn.image_url}
                />
            );
        })
        return (
            <main>
                {mapArr}
            </main>
        );




    }
}

export default Main;