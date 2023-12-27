<template>
  <div class="story-container">
    <p class="story-heading">HIS STORY...</p>
    <div class="story-content-container">
      <img src="../assets/swami-story.svg" alt="Swami-Story-Image" height="400" class="story-img" />
      <div class="story-content">
        <p class="story-content-heading">THUS SPOKE SAI...</p>
        <p class="story-quote-intro">Discoursing during the launch of Sanathana Sarathi...</p>
        <q class="story-swami-quote">
          From this day, our Sanathana Sarathi will lead to victory the cohorts of truth - the
          Vedas, the Sastras and similar scriptures of all faiths, against the forces of the ego
          such as injustice, falsehood, immorality and cruelty. This is the reason why it has
          emerged. This Sarathi will fight in order to establish world prosperity. It is bound to
          sound the paean of triumph when universal Ananda is achieved.
        </q>
        <br />
        <br />
        <p>
          Started in 1958, Sanathana Sarathi is a monthly magazine devoted to Sathya (Truth), Dharma
          (Righteousness), Shanti (Peace) and Prema (Love) - the four cardinal principles of
          Bhagawan Baba's philosophy. It is published from Prasanthi Nilayam (the Abode of Highest
          Peace) and acts as a mouthpiece of Baba's Ashram as it speaks of the important events that
          take place in His sacred Abode, besides carrying Divine Messages conveyed through Divine
          Discourses of Bhagawan Sri Sathya Sai Baba.
        </p>
        <br />
        <p>
          The word meaning of Sanathana Sarathi is the 'Eternal Charioteer'. It signifies the
          presence of the Lord in every being as the atma guiding their lives like a charioteer. It
          implies that he who places his life, the body being likened to a chariot, in an attitude
          of surrender in the hands of the Lord, will be taken care of by the Lord even as a
          charioteer would take the occupant of his chariot safely to its destination.
        </p>
        <br />
        <p>
          The magazine is an instrument to disseminate spiritual knowledge for the moral, physical
          and mental uplift of humanity without any discrimination as the subject matter discussed
          therein is always of common interest and of universal appeal. The fifteen Vahinis -
          streams of sacredness - known as the Vahini Series comprising annotation and
          interpretation of the Upanishads and other scriptures, Itihasas like the Ramayana, the
          Bhagavatha and the Mahabharata, and authentic explanations on Dhyana, Dharma, Prema, etc.,
          have been serially published in this magazine as and when they emanated from the Divine
          pen of Bhagawan Baba. This magazine is published in almost all Indian languages, English
          and Telugu from Prasanthi Nilayam and others from respective regions. Every year Sanathana
          Sarathi comes out with a special issue in November commemorating the Divine Birthday. The
          English and Telugu magazines are posted on the 10th and 23rd respectively, of every month,
          from Prasanthi Nilayam. This magazine has wide, ever increasing circulation in India as
          well as abroad, as the study of it brings the reader closer to the philosophy of the
          Avatar in simple understandable language.
        </p>
        <br />
        <br />
        <p>
          Prof. N. Kasturi was the Editor of Sanathana Sarathi from its inception in 1958 till he
          attained the Divine Lotus Feet in the year 1987. The Professor whose genius had many pens
          in his pocket had written on the genesis of Sanathana Sarathi in his illustious
          autobiography, LOVING GOD.
        </p>
      </div>
    </div>
    <div>
      <p class="story-heading">THE GENESIS...</p>
      <div>
        <img class="story-img" src="../assets/swami-story.png" alt="swami-story-2" />
        <div>
          <p class="story-content-heading">PENANCE FOR PEN</p>
          <p>
            I got the good news pretty quick; Baba had come to Bangalore. He was staying in Sri
            Vittal Rao's house on the 9th Cross Road, Wilson Gardens, only five minutes away from my
            residence, "Ashoka" on the 12th cross. Knowing that there was a possibility of His
            coming to His place, I had tipped the dry cleaner, who attended to the washing and
            ironing of his door and window curtains, to inform me as soon as he delivered the wash
            to Vittal Rao. I had noticed that he had the curtains washed and ironed as part of house
            cleaning, preliminary to Baba's visit. When the news leaked at last, I posted the little
            daughter of my domestic help on a slab of stone facing his house, with directions to
            keep watch for a big car and an orange robe. So within ten minutes of Baba's stepping
            into his house, Vittal Rao was amazed to find me on his verandah! "Wait! Wait! He
            pleaded. But Baba spotted and came towards me with His palm ready to fall on my
            shoulder. "Now, you have work at Puttaparthi", he said. "A monthly magazine will start
            soon. Guess! How is it named?" He asked. I confessed I could not delve into His will.
            Yet He drew out from my reluctance a few names. "The Godward Path", "Karma Dharma",
            "Prema Yoga". He waved aside the titles I suggested and announced that he had decided to
            designate it as "Sanathana Sarathi".
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.story-container {
  height: 100vh;
  overflow: auto;
  scrollbar-width: none;
  padding: 1rem 0;
}

.story-container::-webkit-scrollbar {
  display: none;
}
.story-heading {
  font-size: 2.3rem;
  font-weight: 500;
  color: var(--sssso-text-color1);
  margin: 1rem 0;
}
.story-img {
  float: left;
  margin-right: 1.25rem;
  border-radius: 8px;
  box-shadow:
    var(--sssso-black-mute) 0px 3px 6px,
    var(--sssso-black-soft) 0px 3px 6px;
}

.story-content-heading {
  font-size: 1.5rem;
  color: var(--sssso-text-color1);
}

@media (prefers-color-scheme: dark) {
  .story-img {
    box-shadow:
      var(--sssso-divider-dark-1) 0px 3px 6px 0px,
      var(--sssso-divider-dark-2) 0px 3px 6px 0px;
  }
}

.story-quote-intro {
  font-size: 1rem;
  padding: 0 0 0.8rem 0;
  color: var(--sssso-text-color2);
}

.story-swami-quote {
  color: var(--sssso-text-color1);
}
</style>
