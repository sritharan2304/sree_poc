import React, { useState, useEffect } from 'react';

const App = () => {
  const [disableInteraction, setDisableInteraction] = useState(false);

  useEffect(() => {
    const handleInteraction = (event) => {
      if (disableInteraction) {
        event.preventDefault();
      }
    };

    // Add event listeners when component mounts
    document.addEventListener('click', handleInteraction);
    document.addEventListener('wheel', handleInteraction, { passive: false }); // { passive: false } to disable scroll

    // Remove event listeners when component unmounts
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('wheel', handleInteraction);
    };
  }, [disableInteraction]);

  return (
    <div>
      <button onClick={() => setDisableInteraction(!disableInteraction)}>
        {disableInteraction ? 'Enable Interaction' : 'Disable Interaction'}
      </button>
      <div className='w-50'>
        Certainly, here's a more extended paragraph:

        In the heart of the sprawling metropolis, a vibrant tapestry of life unfolds with every passing moment. As the sun ascends, its rays paint the cityscape in hues of amber and gold, setting the tone for another day of relentless activity. The urban landscape sprawls before the beholder, a mesmerizing blend of architectural marvels, from sleek glass towers that pierce the sky to historic landmarks that bear the imprints of bygone eras. Streets wind like intricate veins, pulsating with the lifeblood of the city—people from diverse backgrounds, each carrying their stories and dreams. The city breathes with a rhythmic energy, a symphony of movement and sound that resonates through the very fabric of its existence. Sidewalks teem with a kaleidoscope of faces, a multitude of languages intermingling in a harmonious cacophony. Street vendors peddle their wares, and the aroma of diverse cuisines wafts through the air, creating an olfactory adventure for those traversing the bustling alleys.

        Skyscrapers, like titans of industry, stand sentinel over the urban expanse, their reflective surfaces mirroring the constant ebb and flow of humanity below. Amidst the ceaseless activity, verdant oases in the form of meticulously landscaped parks and gardens offer a respite, where city dwellers seek solace amidst nature's embrace. The city's heartbeat quickens as rush hour approaches, transforming thoroughfares into rivers of movement, where vehicles of all shapes and sizes converge in a choreographed dance. Neon signs begin to flicker to life, casting a vibrant glow upon the city streets as day transitions into night.

        As dusk settles in, the city undergoes a metamorphosis, revealing a different kind of beauty. The skyline becomes a dazzling constellation of lights, a testament to human ingenuity and the tireless pursuit of progress. Night markets come alive, their stalls aglow with an array of trinkets and treasures. The city's nocturnal creatures emerge—artists, musicians, and revelers seeking the electric pulse of nightlife. Rooftop bars provide panoramic views of the sprawling urban canvas, where individuals come together to toast to the indomitable spirit of the city. Amidst the towering structures and bustling avenues, hidden gems of tranquility can be discovered—a tucked-away courtyard with the soothing melody of a fountain, or a historic bookstore where time seems to stand still.

        In the grand tapestry of this metropolis, each thread weaves a narrative of ambition, resilience, and collective aspiration. The city, with its pulsating energy and dynamic diversity, is a testament to the human spirit's ability to adapt, evolve, and thrive in the face of constant change.

        Certainly, here's a more extended paragraph:

        In the heart of the sprawling metropolis, a vibrant tapestry of life unfolds with every passing moment. As the sun ascends, its rays paint the cityscape in hues of amber and gold, setting the tone for another day of relentless activity. The urban landscape sprawls before the beholder, a mesmerizing blend of architectural marvels, from sleek glass towers that pierce the sky to historic landmarks that bear the imprints of bygone eras. Streets wind like intricate veins, pulsating with the lifeblood of the city—people from diverse backgrounds, each carrying their stories and dreams. The city breathes with a rhythmic energy, a symphony of movement and sound that resonates through the very fabric of its existence. Sidewalks teem with a kaleidoscope of faces, a multitude of languages intermingling in a harmonious cacophony. Street vendors peddle their wares, and the aroma of diverse cuisines wafts through the air, creating an olfactory adventure for those traversing the bustling alleys.

        Skyscrapers, like titans of industry, stand sentinel over the urban expanse, their reflective surfaces mirroring the constant ebb and flow of humanity below. Amidst the ceaseless activity, verdant oases in the form of meticulously landscaped parks and gardens offer a respite, where city dwellers seek solace amidst nature's embrace. The city's heartbeat quickens as rush hour approaches, transforming thoroughfares into rivers of movement, where vehicles of all shapes and sizes converge in a choreographed dance. Neon signs begin to flicker to life, casting a vibrant glow upon the city streets as day transitions into night.

        As dusk settles in, the city undergoes a metamorphosis, revealing a different kind of beauty. The skyline becomes a dazzling constellation of lights, a testament to human ingenuity and the tireless pursuit of progress. Night markets come alive, their stalls aglow with an array of trinkets and treasures. The city's nocturnal creatures emerge—artists, musicians, and revelers seeking the electric pulse of nightlife. Rooftop bars provide panoramic views of the sprawling urban canvas, where individuals come together to toast to the indomitable spirit of the city. Amidst the towering structures and bustling avenues, hidden gems of tranquility can be discovered—a tucked-away courtyard with the soothing melody of a fountain, or a historic bookstore where time seems to stand still.

        In the grand tapestry of this metropolis, each thread weaves a narrative of ambition, resilience, and collective aspiration. The city, with its pulsating energy and dynamic diversity, is a testament to the human spirit's ability to adapt, evolve, and thrive in the face of constant change.
      </div>
    </div>
  );
};

export default App;
