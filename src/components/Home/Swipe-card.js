import React from 'react'
import './Swipe-card.css';
import TinderCard from 'react-tinder-card';

function Swipecard() {

  const [models, setModels] = React.useState([
    {
      name: 'Deepika Padukone',
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Deepika_Padukone_promoting_Chhapaak.jpg'
    },
    {
      name: 'Shradha Kapoor',
      url: 'https://www.breezemasti.com/wp-content/uploads/Shraddha-Kapoor-age-height-husband-birthday-biography-movies.jpg'
    },
    {
      name: 'Kriti Sanon',
      url: 'https://images.indianexpress.com/2023/02/Kriti-Sanon-R.jpg'
    }

  ]);


  return (
    <div className='card-container'>
      {
        models.map(models => (
          <TinderCard
          className='swipe'
          key={models.name}
          preventSwipe={['up','down']}>
            <div
              style={{ backgroundImage: `url(${models.url})` }}
              className='card'>
              <h3>{models.name}</h3>
            </div>
          </TinderCard>
        ))

      }

    </div>
  )
}

export default Swipecard
